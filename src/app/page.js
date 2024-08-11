import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h2>アイコンのライセンス</h2>
        <br />
        <p>このサイトで使用しているアイコンは、「Font Awesome」のFreeプランを利用しています。</p>
        <p>Font Awesomeのライセンスについては、以下のリンクを参照してください。</p>
        <br />
        <Link href='https://fontawesome.com/license/free' className='text-blue-500'>
          Font Awesome Free License
        </Link>
      </div>
    </>
  )
}
