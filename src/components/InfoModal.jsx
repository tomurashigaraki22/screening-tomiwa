'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, LinkedinIcon, X } from 'lucide-react'
import { Button } from "./Button"
import { Card, CardContent, CardHeader } from "./Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs"
import { MetricCard } from "./MetricCard"
import { Modal } from "./Modal"

const exampleLeads = [
  {
    id: 1,
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    profileImage: "/placeholder.svg?height=100&width=100",
    linkedInUrl: "https://linkedin.com/in/janereyes",
    interest: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    whyPicked: [
      "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website",
      "Multiple people at her company have reported 'slowness' during service requests",
      "Northwind Traders currently see $200M in revenue from their in-store coffee shops"
    ],
    metrics: {
      decisionMaker: true,
      potentialValue: "$1M",
      intent: "High"
    },
    about: "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent high-quality service."
  },
  {
    id: 2,
    name: "Anos Voldigoad",
    title: "COO",
    company: "Northwind Traders",
    profileImage: "/placeholder.svg?height=100&width=100",
    linkedInUrl: "https://linkedin.com/in/janereyes",
    interest: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    whyPicked: [
      "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website",
      "Multiple people at her company have reported 'slowness' during service requests",
      "Northwind Traders currently see $200M in revenue from their in-store coffee shops"
    ],
    metrics: {
      decisionMaker: true,
      potentialValue: "$1M",
      intent: "High"
    },
    about: "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent high-quality service."
  },
  {
    id: 3,
    name: "Anna Ludowell",
    title: "COO",
    company: "Northwind Traders",
    profileImage: "/placeholder.svg?height=100&width=100",
    linkedInUrl: "https://linkedin.com/in/janereyes",
    interest: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    whyPicked: [
      "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website",
      "Multiple people at her company have reported 'slowness' during service requests",
      "Northwind Traders currently see $200M in revenue from their in-store coffee shops"
    ],
    metrics: {
      decisionMaker: true,
      potentialValue: "$1M",
      intent: "High"
    },
    about: "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent high-quality service."
  },
]

export default function LeadCard2({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentLead = exampleLeads[currentIndex]

  const handleNext = () => {
    if (currentIndex < exampleLeads.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-start justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={currentLead.profileImage}
                alt={currentLead.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{currentLead.name}</h2>
                {currentLead.linkedInUrl && (
                  <a
                    href={currentLead.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {currentLead.title} | {currentLead.company}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <p className="text-sm text-muted-foreground mb-6">{currentLead.interest}</p>

          <Tabs defaultValue="engage" className="mb-6">
            <TabsList>
              <TabsTrigger value="engage">Engage</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="engage">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Why I picked this lead</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {currentLead.whyPicked.map((reason, index) => (
                      <li key={index} className="text-sm">{reason}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <MetricCard
                    type="decision"
                    value={currentLead.metrics.decisionMaker ? "Yes" : "No"}
                    label="Decision maker"
                  />
                  <MetricCard
                    type="value"
                    value={currentLead.metrics.potentialValue}
                    label="Potential deal value"
                  />
                  <MetricCard
                    type="intent"
                    value={currentLead.metrics.intent}
                    label="Intent"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="space-y-4">
                <h3 className="font-semibold">About {currentLead.name}</h3>
                <p className="text-sm">{currentLead.about}</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="text-sm text-muted-foreground">
              Showing {currentIndex + 1} of {exampleLeads.length}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === exampleLeads.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  )
}

