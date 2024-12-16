"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiPlus, FiFolder, FiClock, FiStar, FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import cn from "classnames";

interface Document {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  status: "draft" | "completed";
  starred: boolean;
  description: string;
  lastModified: string;
}

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "starred" | "draft" | "completed">("all");
  
  // Mock data - replace with actual data from your backend
  const documents: Document[] = [
    {
      id: "1",
      title: "Employment Agreement - Tech Corp",
      type: "Employment Contract",
      createdAt: "2024-12-14",
      status: "completed",
      starred: true,
      description: "This is a sample employment agreement.",
      lastModified: "2024-12-14",
    },
    {
      id: "2",
      title: "NDA - Project Phoenix",
      type: "Non-Disclosure Agreement",
      createdAt: "2024-12-13",
      status: "draft",
      starred: false,
      description: "This is a sample non-disclosure agreement.",
      lastModified: "2024-12-13",
    },
    {
      id: "3",
      title: "Service Agreement - Cloud Services",
      type: "Service Contract",
      createdAt: "2024-12-12",
      status: "completed",
      starred: true,
      description: "This is a sample service agreement.",
      lastModified: "2024-12-12",
    },
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" ||
                         (filter === "starred" && doc.starred) ||
                         (filter === doc.status);
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-gray-900">Your Documents</h1>
            <Link href="/create">
              <Button className="bg-TealGreen text-white hover:bg-TealGreen/90">
                Create New Document
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-lg">
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:border-TealGreen focus:outline-none focus:ring-1 focus:ring-TealGreen"
              />
              <FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="w-[180px]"
            >
              All Documents
            </Button>
            <Button
              variant={filter === "draft" ? "default" : "outline"}
              onClick={() => setFilter("draft")}
              className="w-[180px]"
            >
              Drafts
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              onClick={() => setFilter("completed")}
              className="w-[180px]"
            >
              Completed
            </Button>
          </div>

          {/* Document Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.map((doc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-TealGreen/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{doc.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{doc.type}</p>
                  </div>
                  <Badge 
                    variant={doc.status === 'draft' ? 'warning' : 'success'}
                  >
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </Badge>
                </div>
                <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                  {doc.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <FiPlus className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <FiFolder className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {doc.lastModified}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
