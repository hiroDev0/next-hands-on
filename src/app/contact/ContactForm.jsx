'use client'

// 必要なモジュールをインポート
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// 必要なコンポーネントをインポート
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// フォームのスキーマを定義
// バリデーションルールを定義

const formSchema = z.object({
  name: z
    .string({
      message: '文字列を入力してください',
    })
    .min(2, {
      message: '2文字以上で入力してください',
    })
    .max(50, {
      message: '50文字以内で入力してください',
    }),
  question: z.string().min(10, {
    message: '10文字以上で入力してください',
  }),
})

export function ContactForm() {
  // フォームを定義
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  // 2. submit handlerを定義
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>氏名</FormLabel>
              <FormControl>
                <Input placeholder='適当な名前を入力してください。' {...field} />
              </FormControl>
              <FormDescription>ここが名前入力エリアです。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='question'
          render={({ field }) => (
            <FormItem>
              <FormLabel>ご質問</FormLabel>
              <FormControl>
                <Textarea placeholder='ご質問を入力してください' {...field} />
              </FormControl>
              <FormDescription>ここにEmailアドレスを入力して下しさい。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>コンソールに表示</Button>
      </form>
    </Form>
  )
}
