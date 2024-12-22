"use client";

import HeaderNav from "@/components/Header";
import Image from "next/image";
import { ProgressBar } from "@/components/ProgressBar";
import { Avatar } from "@/components/Avatar";
import { LeadCard } from "@/components/LeadCard";
import KeyActivities from "@/components/KeyActivities";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import SearchableTable from "@/components/SearchComp";
import { useState } from "react";
import LeadCard2 from "@/components/InfoModal";
import { Input } from "@/components/ui/input";
import SideBar from "@/components/SIdeBar";
import MobileSidebar from "@/components/SideBarMobile";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [emails, setEmails] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isSkillExpanded, setIsSkillExpanded] = useState(true)
  const [error, setError] = useState("")
  const [isOpenAgent, setisOpenAgent] = useState(false)
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);

  const validateAndAddEmail = (email) => {
    // Reset error state
    setError("")

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return false
    }

    // Check for duplicate email
    if (emails.includes(email)) {
      setError("This email has already been added")
      return false
    }

    return true
  }

  const handleEmailSubmit = (e) => {
    if (e.key === "Enter" && inputValue) {
      if (validateAndAddEmail(inputValue)) {
        setEmails([...emails, inputValue])
        setInputValue("")
      }
    }
  }

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter(email => email !== emailToRemove))
  }


  const progressSegments = [
    { percentage: 20, color: 'bg-blue-500' },
    { percentage: 30, color: 'bg-purple-500' },
    { percentage: 15, color: 'bg-pink-500' },
    { percentage: 35, color: 'bg-gray-200' }
  ];

  const onClosing = () => {
    setOpenModal(!openModal);
  };

  const onOpening = () => {
    setOpenModal(true);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-start bg-white min-h-screen relative">
      <MobileSidebar isOpenAgent={isOpenAgent} setisOpenAgent={setisOpenAgent}/>
      <div className="fixed top-0 left-0 z-10 w-full lg:w-64 lg:h-full">
        <SideBar/>
      </div>
      
      <div className="w-full p-4 lg:p-8">
        <div className="max-w-7xl mx-auto shadow-2xl mb-5 mt-10 md:mt-0 lg:mt-0">
          <HeaderNav />

          <div className="p-4 lg:p-6 space-y-6 shiny-gradient-border2 shadow-2xl">
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Avatar src="/muna_img.jpg" alt="Mona" size="sm" />
                  <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Hi Mona, <span className="text-purple-600">68%</span> of goal achieved and the rest can be achieved by focusing on 20 top leads.
                  </h1>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <ProgressBar progress={68} segments={progressSegments} />
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-[1fr,300px] gap-4 lg:gap-6">
              <div className="space-y-4">
                <p className="text-sm lg:text-base text-gray-600">
                  Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <LeadCard 
                    avatar="/muna_img.jpg"
                    name="Jane Reyes"
                    title="COO"
                    main="Engage with Jane Reyes"
                    icon="FaMailBulk"
                    company="Northwind Traders"
                    description="Jane may be interested in upgrading espresso machines for her in-store coffee shops."
                    tags={["Expand business", "High buying intent"]}
                    onClick={onOpening}
                    index={0}
                  />
                  
                  <LeadCard 
                    avatar="/allan-avatar.jpeg"
                    name="Allan Munger"
                    title="Head of Real Estate Development"
                    company="Contoso Coffee"
                    icon="FaCalendar"
                    main="Prepare for meeting with Allan"
                    onClick={onOpening}
                    index={1}
                    description="Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract."
                    tags={["Upcoming meeting", "Due today"]}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:sticky lg:top-6">
                <KeyActivities />
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <SearchableTable />
          </div>
        </div>
      </div>

      {openModal && (
        <LeadCard2 onClose={onClosing} />
      )}

{isOpenAgent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl p-6 relative mx-4">
        <button
          onClick={() => setisOpenAgent(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          {/* Agent Skill Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src="/copilot.jpeg" alt="Copilot" style={{ width: 20, height: 24, objectFit: 'contain'}}/>
              </div>
              <h2 className="text-lg font-semibold text-black">Agent skill</h2>
            </div>
            
            <div 
              className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded"
              onClick={() => setIsSkillExpanded(!isSkillExpanded)}
            >
              <span className="text-sm text-gray-600">
                Check if on-hand inventory will allow all sales orders to ship without delay
              </span>
              {isSkillExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {isSkillExpanded && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="mb-2">When <span className="text-blue-500">any vendor</span> sends an email with changes to <span className="text-blue-500">confirmed purchase orders</span>, check if the resulting</p>
                <p className="mb-2"><span className="text-blue-500">on-hand inventory</span> will allow <span className="text-blue-500">all sales orders</span> to <span className="text-blue-500">ship without delay</span>. If so,</p>
                <p><span className="text-blue-500">update the purchase order</span> to reflect the change.</p>
              </div>
            )}
          </div>

          {/* Email Access Section */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Enable email access</h3>
            <p className="text-sm text-gray-600 mb-4">
              Allow the agent to access email inboxes to read mail from known vendors
            </p>2
            
            <div className="space-y-3">
              <div>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    setError("") // Clear error when typing
                  }}
                  onKeyDown={handleEmailSubmit}
                  className={`w-full ${error ? 'border-red-500' : ''} text-gray-600`}
                />
                {error && (
                  <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    <span>{email}</span>
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setisOpenAgent(false)}>
              Close
            </Button>
            <Button onClick={() => setisOpenAgent(false)}>
              Activate
            </Button>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
  );
}

