import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/assignment-1/question-1"><button>Question 1</button></Link>
      <Link href="/assignment-1/question-2"><button>Question 2</button></Link>
      <Link href="/assignment-1/question-3"><button>Question 3</button></Link>
      <Link href="/assignment-1/question-4"><button>Question 4</button></Link>
      <Link href="/assignment-1/question-5"><button>Question 5</button></Link>
      <Link href="/assignment-1/question-6"><button>Question 6</button></Link>
    </div>
  );
}
