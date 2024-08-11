import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// サンプルの作品データリスト
const works = [
  {
    title: '作品１',
    description: '作品１の説明',
    content: '作品１の内容',
    footer: '作品１のフッター',
  },
  {
    title: '作品２',
    description: '作品２の説明',
    content: '作品２の内容',
    footer: '作品２のフッター',
  },
  {
    title: '作品３',
    description: '作品３の説明',
    content: '作品３の内容',
    footer: '作品３のフッター',
  },
  {
    title: '作品４',
    description: '作品４の説明',
    content: '作品４の内容',
    footer: '作品４のフッター',
  },
  {
    title: '作品５',
    description: '作品５の説明',
    content: '作品５の内容',
    footer: '作品５のフッター',
  },
]

export default function Page() {
  return (
    <>
      <h2>Work</h2>
      <div
        className='
          grid grid-cols-1 justify-items-center
          gap-4
          bg-gray-200
          p-4
          xs:grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          
      '
      >
        {works.map((work, index) => (
          <Card
            key={index}
            className='
              col-span-1
              border
              min-w-96
              max-w-xl
              min-h-96
              border-gray-200
              rounded-lg
              shadow-sm
              hover:shadow-xl
            '
          >
            <CardHeader>
              <CardTitle>{work.title}</CardTitle>
              <CardDescription>{work.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{work.content}</p>
            </CardContent>
            <CardFooter>
              <p>{work.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
