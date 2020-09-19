export default async function dataFetch(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}
