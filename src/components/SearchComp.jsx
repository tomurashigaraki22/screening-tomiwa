'use client'

import { useState } from 'react'
import { FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'

export default function SearchableTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: 'createdOn', direction: 'desc' })
  const [selectedRows, setSelectedRows] = useState([])
  const [view, setView] = useState('table') // Default view is table

  const data = [
    { id: 1, name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', createdOn: '4/02/2024 12:00 PM' },
    { id: 2, name: 'Josie Love', topic: 'Upgrading service plan', status: 'New', createdOn: '3/30/2024 7:45 AM' },
    { id: 3, name: 'Harrison Curtis', topic: 'Issue with throughput on EspressoMaster', status: 'New', createdOn: '3/28/2024 3:30 PM' },
    { id: 4, name: 'Jermaine Bennett', topic: 'New roaster in distribution facility', status: 'New', createdOn: '3/25/2024 11:05 AM' },
    { id: 5, name: 'Gerald Stephens', topic: 'Concerns on current machines', status: 'New', createdOn: '3/23/2024 4:50 PM' },
    { id: 6, name: 'Halle Griffiths', topic: 'Expanding business', status: 'New', createdOn: '3/21/2024 10:20 AM' },
    { id: 7, name: 'Rachel Michael', topic: 'Addressing service concerns', status: 'New', createdOn: '3/18/2024 1:15 PM' },
    { id: 8, name: 'Alex Baker', topic: 'Premium coffee beans', status: 'New', createdOn: '3/17/2024 8:00 AM' },
    { id: 9, name: 'Lily Pyles', topic: 'Cafe A100 bulk rate', status: 'New', createdOn: '3/13/2024 2:45 PM' },
    { id: 10, name: 'Jane Reyes', topic: 'Improving cost per cup', status: 'New', createdOn: '3/10/2024 9:30 AM' },
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
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />
    return sortConfig.direction === 'asc' ? 
      <FaSortUp className="text-gray-600" /> : 
      <FaSortDown className="text-gray-600" />
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* View Selector */}
      <div className="p-4 border-b flex justify-between items-center">
        <div className="relative w-1/3">
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

        {/* View Toggle Dropdown */}
        <select
          className="border py-2 px-4 rounded-md text-gray-600"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value="table">Table View</option>
          <option value="list">List View</option>
        </select>

        {/* Image */}
        
      </div>

      {/* List View */}
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

      {/* Table View */}
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
    </div>
  )
}
