
import React from 'react';
import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Book, Leaf, Gift } from 'lucide-react';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Bhagavad Gita As It Is",
      category: "books",
      price: 399,
      image: "https://picsum.photos/seed/book1/300/300",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Sandalwood Japa Mala",
      category: "devotional",
      price: 599,
      image: "https://picsum.photos/seed/mala/300/300",
      rating: 4.5,
      reviews: 84
    },
    {
      id: 3,
      name: "Tulsi Face Wash",
      category: "gaushala",
      price: 249,
      image: "https://picsum.photos/seed/tulsi/300/300",
      rating: 4,
      reviews: 56
    },
    {
      id: 4,
      name: "Srimad Bhagavatam Set",
      category: "books",
      price: 9999,
      image: "https://picsum.photos/seed/bhagavatam/300/300",
      rating: 5,
      reviews: 42
    },
    {
      id: 5,
      name: "Krishna Idol - Brass",
      category: "devotional",
      price: 1499,
      image: "https://picsum.photos/seed/krishna/300/300",
      rating: 4.8,
      reviews: 93
    },
    {
      id: 6,
      name: "Cow Ghee - 500ml",
      category: "gaushala",
      price: 699,
      image: "https://picsum.photos/seed/ghee/300/300",
      rating: 4.7,
      reviews: 115
    }
  ];

  // Filter products by category
  const bookProducts = products.filter(p => p.category === "books");
  const devotionalProducts = products.filter(p => p.category === "devotional");
  const gaushalaProducts = products.filter(p => p.category === "gaushala");

  // Product card component
  const ProductCard = ({ product }) => (
    <div className="border border-muted rounded-lg overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-foreground">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">₹{product.price}</span>
          <div className="flex items-center gap-1">
            <span className="text-amber-500">★</span>
            <span className="text-sm">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <button className="w-full mt-2 bg-saffron-500 hover:bg-saffron-600 text-white py-2 rounded-md transition-colors text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-saffron-700">Shop</h1>
          <p className="text-lg text-muted-foreground">
            Devotional items, books, and gaushala products
          </p>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-saffron-50 border border-saffron-100 w-full justify-start overflow-x-auto">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              All Products
            </TabsTrigger>
            <TabsTrigger 
              value="books" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              <Book className="h-4 w-4 mr-2" />
              Books
            </TabsTrigger>
            <TabsTrigger 
              value="devotional" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              <Gift className="h-4 w-4 mr-2" />
              Devotional Items
            </TabsTrigger>
            <TabsTrigger 
              value="gaushala" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              <Leaf className="h-4 w-4 mr-2" />
              Gaushala Products
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="books" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="devotional" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devotionalProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gaushala" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gaushalaProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ShopPage;
