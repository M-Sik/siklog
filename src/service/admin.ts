export async function adminCheck(pw: string): Promise<boolean> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/admin?id=rlaaudtlr233&pw=${pw}`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  return data;
}
