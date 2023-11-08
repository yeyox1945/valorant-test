import { List } from "@mantine/core";
import PostItem from "./postItem";

interface Props {
  posts: Post[];
}

export default function PostsView({ posts }: Props) {
  return (
    <List spacing={"xl"} style={{ marginTop: 20, marginBottom: 20 }}>
      {posts.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </List>
  );
}
