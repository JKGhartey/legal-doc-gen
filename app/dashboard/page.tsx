"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiPlus, FiFolder, FiClock, FiStar, FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";

interface Document {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  status: "draft" | "completed";
  starred: boolean;
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
    },
    {
      id: "2",
      title: "NDA - Project Phoenix",
      type: "Non-Disclosure Agreement",
      createdAt: "2024-12-13",
      status: "draft",
      starred: false,
    },
    {
      id: "3",
      title: "Service Agreement - Cloud Services",
      type: "Service Contract",
      createdAt: "2024-12-12",
      status: "completed",
      starred: true,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
            <Link href="/create">
              <Button className="bg-TealGreen text-white hover:bg-TealGreen/90">
                <FiPlus className="mr-2 h-4 w-4" />
                New Document
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-[100px]"
            >
              All
            </Button>
            <Button
              variant={filter === "starred" ? "default" : "outline"}
              onClick={() => setFilter("starred")}
              className="min-w-[100px]"
            >
              <FiStar className="mr-2 h-4 w-4" />
              Starred
            </Button>
            <Button
              variant={filter === "draft" ? "default" : "outline"}
              onClick={() => setFilter("draft")}
              className="min-w-[100px]"
            >
              Drafts
            </Button>
          </div>
        </div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-TealGreen/10">
                      <FiFolder className="h-6 w-6 text-TealGreen" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-500">{doc.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {/* Toggle star */}}
                    className={`text-${doc.starred ? "yellow" : "gray"}-400 hover:text-yellow-500`}
                  >
                    <FiStar className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <FiClock className="mr-1.5 h-4 w-4" />
                    {doc.createdAt}
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${doc.status === "completed" 
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {/* View document */}}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {/* Edit document */}}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <FiFolder className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery
                ? "Try adjusting your search or filter criteria"
                : "Get started by creating a new document"}
            </p>
            {!searchQuery && (
              <div className="mt-6">
                <Link href="/create">
                  <Button className="bg-TealGreen text-white hover:bg-TealGreen/90">
                    <FiPlus className="mr-2 h-4 w-4" />
                    New Document
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
