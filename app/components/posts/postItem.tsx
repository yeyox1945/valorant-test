import { toHumanlyReadableTime } from "@/app/utils/timeFormatter";
import { Card, Title, Avatar, Text, Group, Image, Button } from "@mantine/core";
import Link from "next/link";

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <Card radius={20} m={20} style={{ paddingBottom: 40 }}>
      <Group wrap="nowrap">
        <Link href={`/posts/${post.id}`} style={{ flex: 1 }}>
          <Image src={post.postImage} width={100} height={100} />
        </Link>
        <div style={{ flex: 5, flexDirection: "column" }}>
          <Group mb={10}>
            <Avatar src={post.authorAvatar} />
            <Title>{post.authorName} </Title>
            <Text>{post.id} </Text>
          </Group>
          <Link href={`/posts/${post.id}`}>
            <Text>{post.postText} </Text>
          </Link>
        </div>
      </Group>
      <Text style={{ position: "absolute", bottom: 10, right: 20 }}>
        {toHumanlyReadableTime(post.createdAt)}
      </Text>
    </Card>
  );
}
