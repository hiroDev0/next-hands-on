// ↓ここを追加
'use client'

// React-iconsからメニューアイコンをインポート
import { FaBars } from 'react-icons/fa6'
// インストールしたButtonコンポーネントをインポート
import { Button } from '../ui/button'
// Next.jsで使えるLinkコンポーネントをインポート
import Link from 'next/link'
// メニューの一覧をインポート
import { MENU_ITEMS } from '../../constants/menuItems'

import MenuDrawer from '../ui/drawers/MenuDrawer'

// ↓ここを追加
import { useState } from 'react'

export default function CustomHeader() {
  // ↓ここを追加
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
      className={`
        sticky
        w-full
        bg-yellow-300
        p-4 md:px-32
        `}
    >
      {/* ↓　ここから　↓ */}
      <MenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* ↑　ここまで追加　↑ */}

      <header
        className={`
          flex justify-between items-center
          `}
      >
        {/* Buttonコンポーネントを使ってメニューアイコンを表示 */}
        <Button
          aria-label='menu'
          role='button'
          variant='default'
          className='block md:hidden size-12'
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </Button>

        <h1 className='text-2xl hidden md:block'>My-site</h1>
        <nav
          className={`
            hidden md:flex gap-4
            `}
        >
          {/* メニューの一覧を表示 */}
          {MENU_ITEMS.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
