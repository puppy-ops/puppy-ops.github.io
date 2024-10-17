import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240407185923-gigapixel-scale-2x-YMs21gpQLfptIElu94f4qcEZowf9fT.jpg"
        alt="Background image of a woman with pink hair surrounded by papers"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 flex-grow flex flex-col">
        <header className="w-full p-4 bg-white bg-opacity-80 backdrop-blur-sm">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">My Blog</h1>
            <div className="space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Posts</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center items-center text-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-2xl">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Welcome to My Creative Space</h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore my thoughts, ideas, and inspirations as we navigate through the chaotic beauty of life together.
            </p>
            <div className="flex space-x-4 justify-center">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Read Latest Post</Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-100">Subscribe</Button>
            </div>
          </div>
        </main>
        <footer className="w-full p-4 bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2024 My Blog. All rights reserved.</p>
            <div className="flex space-x-4">
              <Input type="email" placeholder="Subscribe to newsletter" className="w-64" />
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Subscribe</Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}