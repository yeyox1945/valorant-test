"use client";

import { useGetPostsQuery } from "@/redux/api/postsApi";
import { AppShell, Title, Text, Center, Loader, Group } from "@mantine/core";
import PostsView from "../components/posts/posts";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchInput } from "../components/posts/searchBar";

export default function PostsPage() {
  // states
  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // hooks
  const { data, error, isLoading, isSuccess } = useGetPostsQuery({
    page: page.toString(),
    search: searchQuery,
    limit: "5",
  });

  // refs
  const observer = useRef<IntersectionObserver>();
  const loadingElementRef = useCallback(
    (loadingElement: HTMLSpanElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLastPage) {
          setPage((prev) => prev + 1);
        }
      });
      if (loadingElement) observer.current.observe(loadingElement);
    },
    [isLastPage]
  );

  // effects
  //   useEffect(() => {
  //     if (data && isSuccess) {
  //       setPosts([...posts, ...data]);
  //     }
  //     if (data?.length === 0 && page < 0) setLastPage(true);
  //   }, [data]);

  useEffect(() => {
    if (data) {
      setPosts([...posts, ...data]);
    }
    if (data?.length === 0 && page < 0) setLastPage(true);
  }, [page]);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [searchQuery]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Couldnt get posts</Text>;

  return (
    <AppShell padding="xl">
      <AppShell.Main>
        <Group justify="space-between">
          <Title>Posts</Title>
          <SearchInput
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
          />
        </Group>
        <PostsView posts={posts || []} />
        {!isLastPage && (
          <Center>
            <Loader ref={loadingElementRef} />
          </Center>
        )}
      </AppShell.Main>
    </AppShell>
  );
}
