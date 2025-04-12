
import React from 'react';
import { Layout } from '@/components/Layout';
import { HelpCircle, SendHorizontal, Plus, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AskPage = () => {
  const faqs = [
    {
      question: "What is Krishna Consciousness?",
      answer: "Krishna Consciousness is the revival of our original, pure consciousness in which we can perceive our eternal relationship with Krishna. It is the natural, unalloyed state of awareness that is dormant within each of us."
    },
    {
      question: "How do I start practicing Krishna Consciousness?",
      answer: "Begin by chanting the Hare Krishna Maha Mantra, reading Bhagavad Gita, and following the four regulative principles: no meat-eating, no illicit sex, no intoxication, and no gambling. Connecting with devotees and spiritual guides is also very helpful."
    },
    {
      question: "What is the significance of the Hare Krishna Maha Mantra?",
      answer: "The Hare Krishna Maha Mantra consists of divine names of the Lord: Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare. Chanting these names cleanses the heart, brings spiritual awareness, and connects us with Krishna."
    },
    {
      question: "How many rounds of japa should I chant daily?",
      answer: "Initiated devotees typically chant 16 rounds (of 108 beads each) daily. However, beginners can start with a smaller number and gradually increase. The quality of chanting is as important as the quantity."
    },
    {
      question: "What is GIVE GITA's mission?",
      answer: "GIVE GITA aims to distribute the wisdom of Bhagavad Gita to all, bringing spiritual enlightenment and peace through the teachings of Krishna consciousness. We focus on education, community development, and spiritual upliftment."
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-devotion-700">Ask</h1>
          <p className="text-lg text-muted-foreground">
            Get answers to your spiritual questions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search FAQ..." 
              className="pl-10 bg-white border-devotion-200"
            />
          </div>
          
          <Tabs defaultValue="faq" className="space-y-6">
            <TabsList className="bg-devotion-50 border border-devotion-100 w-full justify-start">
              <TabsTrigger 
                value="faq" 
                className="data-[state=active]:bg-devotion-500 data-[state=active]:text-white"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Frequently Asked Questions
              </TabsTrigger>
              <TabsTrigger 
                value="ask" 
                className="data-[state=active]:bg-devotion-500 data-[state=active]:text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Ask a New Question
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq" className="mt-0">
              <div className="bg-white rounded-lg border border-devotion-200 overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="px-4 text-left hover:text-devotion-700 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="ask" className="mt-0">
              <div className="bg-white rounded-lg border border-devotion-200 p-6">
                <h2 className="text-xl font-semibold text-devotion-700 mb-4">Submit Your Question</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium mb-1">Your Question</label>
                    <Textarea 
                      id="question" 
                      placeholder="Type your spiritual question here..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 bg-devotion-500 hover:bg-devotion-600 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Submit Question
                    <SendHorizontal className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AskPage;
