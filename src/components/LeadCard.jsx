"use client";

import { FaCalendar, FaMailBulk } from "react-icons/fa";
import { Avatar } from "./Avatar";
import React, { useState } from "react";
import Modal from 'react-modal'
import PartIt from "./PartOf";
import { leads } from "./Leads";
import { ArrowRight, Book, Check, ChevronLeft, ChevronRight, Flag, LinkedinIcon, Medal, Settings, X } from "lucide-react";



export function LeadCard({ avatar, name, title, company, description, tags, dueText, main, icon, onClick }) {
  const [isOpen, setisOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setisHovered] = useState(false)
  const [activeTab, setActiveTab] = useState('engage')
  const currentLead = leads[currentIndex]

  const handleNext = () => {
    if (currentIndex < leads.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }


  return (
    <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors shadow-lg border-gray-300" onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}>
      <div className="flex items-start gap-3">
        <Avatar src={avatar} alt={name} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{company}</span>
          </div>
          <p className="text-sm text-gray-500">{title}</p>
          
          {/* Gradient Background Section */}
          
          
          {/* Tags Section */}
          
        </div>
        
        {/* Button Section */}
        <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => setisOpen(true)}>
          <svg width="21" height="21" viewBox="0 0 16 16" fill="#000000">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shiny-gradient-border">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <img src="/mail.jpeg" alt="Mail" className="w-5 h-6 object-contain"/>
                <h2 className="text-lg font-bold text-black font-livvic">Engage with {currentLead.name}</h2>
              </div>
              <button
                onClick={() => setisOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
  
            {/* Header */}
            <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <img
                    src={currentLead.profileImage}
                    alt={currentLead.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-black">{currentLead.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    {currentLead.linkedInUrl && (
                      <a
                        href={currentLead.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        <img src="/linkedln.png" alt="LinkedIn" className="w-4 h-5 object-contain"/>
                      </a>
                    )}
                    <p className="text-sm text-gray-500">
                      {currentLead.title} | {currentLead.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Tabs */}
            <div className="border-b pt-3">
              <div className="flex gap-4 px-4">
                <button
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'engage'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('engage')}
                >
                  Engage
                </button>
                <button
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'research'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('research')}
                >
                  Research
                </button>
              </div>
            </div>
          </div>
  
          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-6">{currentLead.interest}</p>
  
            {/* Tab Content */}
            {activeTab === 'engage' ? (
              <div className="space-y-6 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold mb-2 text-black">Why I picked this lead</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {currentLead.whyPicked.map((reason, index) => (
                      <li key={index} className="text-sm text-gray-600">{reason}</li>
                    ))}
                  </ul>
                </div>
  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 border-2 bg-gray-50 rounded-md shadow-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-black">Yes</div>
                      <div className="text-sm text-gray-400 font-semibold">Decision maker</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-2 bg-gray-50 rounded-md shadow-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Potential deal value</div>
                      <div className="text-sm font-semibold text-gray-400">{currentLead.metrics.potentialValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-2 bg-gray-50 rounded-md shadow-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-black">{currentLead.metrics.intent}</div>
                      <div className="text-sm font-semibold text-gray-400">Intent</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold">About {currentLead.name}</h3>
                <p className="text-sm text-gray-600">{currentLead.about}</p>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {currentIndex + 1} of {leads.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" color="black"/>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === leads.length - 1}
                className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" color="black"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      )}

      {isHovered && (
        <div className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-4 mt-2 w-72 cursor-pointer">
          <h4 className="font-semibold mb-2 text-gray-600">Preview</h4>
          <p className="text-sm text-gray-600 mb-2">{name}</p>
          <div className="flex items-center gap-2">
            <Book className="text-gray-400" />
            <span className="text-sm text-gray-500">{description}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Settings className="text-gray-400" />
            <span className="text-sm text-gray-500">Click caret to view full details</span>
          </div>
        </div>
      )}
      <PartIt name={name} title={main} description={description}/>

      <div className="mt-3 flex items-center gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-500">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Due Text Section */}
          {dueText && (
            <p className="mt-1 text-sm text-gray-500">
              {dueText}
            </p>
          )}
    </div>
  );
}

const customStyles = { overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' } }
