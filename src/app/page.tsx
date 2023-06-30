import Product from '@/components/Product'
import Image from 'next/image'
const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  return res.json()
}

export default async function Home() {
  //refreing to array of products
  const products: Product[] = await getProducts()

  return (
    <main className='min-h-screen  mx-auto mx-w-7xl px-8 xl:px-0 mt-48'>
      <section className='flex flex-col space-y-12 pb-44'>
        <h1 className='text-5xl font-bold text-center'> DEALS OF THE DAY</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xl:gap-x-8  px-2'>
        {products.map((product) =>
          (<Product product={product} key={product.id} />)

        )}
        </div>
   
      </section>
    </main>
  )
}
