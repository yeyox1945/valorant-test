"use client";
import PostItem from "@/app/components/posts/postItem";
import { toHumanlyReadableTime } from "@/app/utils/timeFormatter";
import { useGetPostByIdQuery } from "@/redux/api/postsApi";
import { Avatar, Card, Group, Text, Title, Image } from "@mantine/core";

interface Params {
  id: string;
}

export default function PostPage({ params }: { params: Params }) {
  const { data, error, isLoading } = useGetPostByIdQuery(params.id);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Couldnt get posts</Text>;

  return (
    <Card radius={20} m={20} style={{ paddingBottom: 40 }}>
      <Card.Section>
        <Image src={data?.postImage!} height={400} />
      </Card.Section>
      <Group wrap="nowrap" mt={20} p={20}>
        <div style={{ flex: 5, flexDirection: "column" }}>
          <Group mb={10}>
            <Avatar src={data?.authorAvatar} />
            <Title>{data?.authorName} </Title>
            <Text>{data?.id} </Text>
          </Group>
          <Text>{data?.postText} </Text>
        </div>
      </Group>
      <Text style={{ position: "absolute", bottom: 10, right: 20 }}>
        {toHumanlyReadableTime(data?.createdAt!)}
      </Text>
    </Card>
  );
}
