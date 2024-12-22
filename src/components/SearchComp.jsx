'use client'

import { useState } from 'react'
import { FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'
import SuggestionCard from './SuggestionCard'
import { leads } from './LeadsSearch'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { Medal } from 'lucide-react'
import { Check } from 'lucide-react'
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Input } from './ui/input'
import { X } from 'lucide-react'
import { Calendar } from 'lucide-react'

export default function SearchableTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: 'createdOn', direction: 'desc' })
  const [selectedRows, setSelectedRows] = useState([])
  const [view, setView] = useState('table')
  const [isOpen, setisOpen] = useState(false)
  const [dateFilter, setDateFilter] = useState('')
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

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

  const showOpen = (id) => {
    setisHovered(false)
    setisOpen(true)
    setCurrentIndex(id + 1)
  }

  const handleDateFilter = (date) => {
    setDateFilter(date)
    setIsDatePickerOpen(false)
  }

  const data = [
    { id: 1, name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', createdOn: '2024-04-02' },
    { id: 2, name: 'Josie Love', topic: 'Upgrading service plan', status: 'New', createdOn: '2024-03-30' },
    { id: 3, name: 'Harrison Curtis', topic: 'Issue with throughput on EspressoMaster', status: 'New', createdOn: '2024-03-28' },
    { id: 4, name: 'Jermaine Bennett', topic: 'New roaster in distribution facility', status: 'New', createdOn: '2024-03-25' },
    { id: 5, name: 'Gerald Stephens', topic: 'Concerns on current machines', status: 'New', createdOn: '2024-03-23' },
    { id: 6, name: 'Halle Griffiths', topic: 'Expanding business', status: 'New', createdOn: '2024-03-21' },
    { id: 7, name: 'Rachel Michael', topic: 'Addressing service concerns', status: 'New', createdOn: '2024-03-18' },
    { id: 8, name: 'Alex Baker', topic: 'Premium coffee beans', status: 'New', createdOn: '2024-03-17' },
    { id: 9, name: 'Lily Pyles', topic: 'Cafe A100 bulk rate', status: 'New', createdOn: '2024-03-13' },
    { id: 10, name: 'Jane Reyes', topic: 'Improving cost per cup', status: 'New', createdOn: '2024-03-10' },
  ]

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ key, direction })
  }

  const handleSelectAll = (e) => {
    setSelectedRows(e.target.checked ? data.map(item => item.id) : [])
  }

  const handleSelectRow = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1
  })

  const filteredData = sortedData.filter(item => 
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!dateFilter || item.createdOn === dateFilter)
  )

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />
    return sortConfig.direction === 'asc' ? 
      <FaSortUp className="text-gray-600" /> : 
      <FaSortDown className="text-gray-600" />
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b flex flex-wrap justify-between items-center">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <img
            src="copilot.jpeg"
            alt="Copilot"
            className="w-6 h-6 ml-4 rounded-full object-cover absolute top-2 right-3 text-purple-500 hidden md:block lg:block"
          />
        </div>

        <div className="flex items-center space-x-4">
            <button
              onClick={() => setDateFilter('')}
              className="text-gray-500 hover:text-gray-700"
              title="Clear date filter"
            >
              <X className="h-4 w-4 text-black" />
            </button>
          <div className="relative">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="p-2 border rounded-md text-gray-600"
            />
            
          </div>

          <select
            className="border py-2 px-4 rounded-md text-gray-600"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <option value="table">Table View</option>
            <option value="list">List View</option>
          </select>
        </div>
      </div>

      {view === 'list' && (
        <div className="p-4">
          {filteredData.map((item) => (
            <div key={item.id} className="border-b py-2">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.topic}</div>
                </div>
                <div className="text-right text-gray-500 text-sm">{item.createdOn}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th 
                  className="px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Name {getSortIcon('name')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                  onClick={() => handleSort('topic')}
                >
                  <div className="flex items-center gap-2">
                    Topic {getSortIcon('topic')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center gap-2">
                    Status reason {getSortIcon('status')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                  onClick={() => handleSort('createdOn')}
                >
                  <div className="flex items-center gap-2">
                    Created on {getSortIcon('createdOn')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredData.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-gray-50"
                  onClick={() => showOpen(item.id)}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.topic}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.status}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.createdOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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

              <SuggestionCard text={currentLead.interest}/>
    
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
    
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-6">{currentLead.interest}</p>
    
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
    </div>
  )
}

