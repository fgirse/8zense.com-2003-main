import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Avatar from "@/public/assets/images/avatar-sm-bardot.png"

export default function ProductCard() {
  return (
    <div className=" mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Product Card 1 */}
      <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <Image src={Avatar} alt="Portrait Bardot" sizes="100vw" style={{width:'30%',height: 'auto',}}/>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-zenseSignal2 to-orange-200 p-2 text-white">
            Testimonials
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            Brigitte Bardot
          </CardTitle>
          <CardDescription className="text-gray-600 mb-4">
            Schauspielerin
          </CardDescription>
          <p className="text-gray-700 mb-2">$99.99</p>
        </CardContent>
        <CardFooter className="p-4 bg-gray-100">
          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
            Add to Cart
          </button>
        </CardFooter>
      </Card>

      {/* Product Card 2 */}
      <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <img
            src="/watch.png"
            alt="Product Image"
            className="w-full h-48 bg-contain bg-center"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white">
            New Arrival
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            Product Title
          </CardTitle>
          <CardDescription className="text-gray-600 mb-4">
            Product Description goes here. Provide a brief overview of the
            product.
          </CardDescription>
          <p className="text-gray-700 mb-2">$99.99</p>
        </CardContent>
        <CardFooter className="p-4 bg-gray-100">
          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
            Add to Cart
          </button>
        </CardFooter>
      </Card>

      {/* Product Card 3 */}
      <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <img
            src="/watch.png"
            alt="Product Image"
            className="w-full h-48 bg-contain bg-center"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white">
            New Arrival
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            Product Title
          </CardTitle>
          <CardDescription className="text-gray-600 mb-4">
            Product Description goes here. Provide a brief overview of the
            product.
          </CardDescription>
          <p className="text-gray-700 mb-2"></p>
        </CardContent>
        <CardFooter className="p-4 bg-gray-100">
          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
            Add to Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}

