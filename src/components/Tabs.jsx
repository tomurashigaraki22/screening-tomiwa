"use client";
import React from 'react'

import { useState } from 'react'

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  
  const tabs = children.filter(child => child.type === TabsList)
  const contents = children.filter(child => child.type === TabsContent)
  
  return (
    <div className="space-y-2">
      {tabs.map(tab => {
        return React.cloneElement(tab, {
          activeTab,
          setActiveTab,
        })
      })}
      {contents.map(content => {
        return React.cloneElement(content, {
          activeTab,
        })
      })}
    </div>
  )
}

export function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          isActive: activeTab === child.props.value,
          onClick: () => setActiveTab(child.props.value),
        })
      })}
    </div>
  )
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        ${isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50"}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, activeTab }) {
  if (value !== activeTab) return null
  
  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {children}
    </div>
  )
}

