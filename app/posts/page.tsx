"use client";

import { useGetPostsQuery } from "@/redux/api/postsApi";
import { AppShell, Title, Center, Loader, Group } from "@mantine/core";
import PostsView from "../components/posts/posts";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchInput } from "../components/posts/searchBar";
import debounce from "lodash.debounce";
import Loading from "../components/loading";
import Error from "../components/error";

export default function PostsPage() {
  // states
  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // hooks
  const { data, error, isLoading } = useGetPostsQuery({
    page: page.toString(),
    limit: "5",
    search: searchQuery,
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

  const handleQueryChange = (value: string) => {
    setSearchQuery(value);
  };

  const debouncedSearch = useCallback(debounce(handleQueryChange, 500), []);

  // effects
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  useEffect(() => {
    if (data) {
      if (data.length == 0 && page > 0) {
        setLastPage(true);
        return;
      }
      setTimeout(() => setPosts([...posts, ...data]), 500);
    }
  }, [page]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setTimeout(() => setPosts(data), 500);
    }
  }, [searchQuery]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <AppShell padding="xl">
      <AppShell.Main pb={50}>
        <Group justify="space-between">
          <Title>Posts</Title>
          <SearchInput
            type="text"
            onChange={(e) => debouncedSearch(e.target.value)}
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
