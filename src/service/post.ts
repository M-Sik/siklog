export async function addPost(
  title: string,
  subtitle: string,
  createdAt: string,
  pw: string,
  markdown: string,
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC__API_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      subtitle,
      createdAt,
      pw,
      markdown,
    }),
  });
  const data = await response.json();
  return data;
}
