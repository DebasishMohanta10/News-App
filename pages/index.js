import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
export default function Home({results,entertainments,populars,sports,business}) {
  return (
    <div className="container py-5">
      <Header results={results} />
      <Section1 results={entertainments} populars={populars} />
      <Section2 results={sports} />
      <Section3 results={business} populars={results} />
    </div>
  )
}

const API_KEY = "KY925oKxGn0Kuvm8pmLN8ZT8GGiSkn3A"
export async function getStaticProps(){
  const URL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`;
  const URL2 = `https://api.nytimes.com/svc/topstories/v2/style.json?api-key=${API_KEY}`

  const URL3 = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`

  const URL4 = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${API_KEY}`

  const URL5 = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${API_KEY}`

  const responses = await Promise.all([fetch(URL), fetch(URL2), fetch(URL3), fetch(URL4),fetch(URL5)]);
  const data1 = await responses[0].json();
  const data2 = await responses[1].json();
  const data3 = await responses[2].json();
  const data4 = await responses[3].json();
  const data5 = await responses[4].json();
  return {
    props: {
      results: data1.results,
      entertainments: data2.results,
      populars: data3.results,
      sports: data4.results,
      business: data5.results,
    }
  }
}
