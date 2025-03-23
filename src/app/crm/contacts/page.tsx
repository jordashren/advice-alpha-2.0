"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  UserPlus, 
  Mail, 
  Phone, 
  Calendar, 
  ArrowRight,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ArrowUpDown,
  X,
  ChevronDown
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Mock data - replace with actual data from your backend
const metrics = [
  { title: "Total Contacts", value: "120", icon: Users, color: "text-[#3AAFA9]" },
  { title: "New This Month", value: "15", icon: UserPlus, color: "text-[#3AAFA9]" },
  { title: "Recent Interactions", value: "10", icon: Clock, color: "text-[#3AAFA9]" },
  { title: "Uncategorized", value: "20", icon: AlertCircle, color: "text-[#3AAFA9]" },
]

const contacts = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    status: "Engaged",
    lastContacted: "2024-03-20",
    nextAction: "Follow-up call",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 234-5678",
    status: "Active",
    lastContacted: "2024-03-19",
    nextAction: "Portfolio review",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "(555) 345-6789",
    status: "Prospect",
    lastContacted: "2024-03-18",
    nextAction: "Initial meeting",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "(555) 456-7890",
    status: "Active",
    lastContacted: "2024-03-17",
    nextAction: "Document review",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "(555) 567-8901",
    status: "Engaged",
    lastContacted: "2024-03-16",
    nextAction: "Investment strategy",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "(555) 678-9012",
    status: "Prospect",
    lastContacted: "2024-03-15",
    nextAction: "Follow-up email",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "James Taylor",
    email: "james.t@example.com",
    phone: "(555) 789-0123",
    status: "Active",
    lastContacted: "2024-03-14",
    nextAction: "Tax planning",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Maria Garcia",
    email: "maria.g@example.com",
    phone: "(555) 890-1234",
    status: "Engaged",
    lastContacted: "2024-03-13",
    nextAction: "Retirement planning",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Thomas Lee",
    email: "thomas.l@example.com",
    phone: "(555) 901-2345",
    status: "Prospect",
    lastContacted: "2024-03-12",
    nextAction: "Initial consultation",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Jennifer White",
    email: "jennifer.w@example.com",
    phone: "(555) 012-3456",
    status: "Active",
    lastContacted: "2024-03-11",
    nextAction: "Portfolio update",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "William Chen",
    email: "william.c@example.com",
    phone: "(555) 123-7890",
    status: "Engaged",
    lastContacted: "2024-03-10",
    nextAction: "Risk assessment",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Sophia Rodriguez",
    email: "sophia.r@example.com",
    phone: "(555) 234-8901",
    status: "Active",
    lastContacted: "2024-03-09",
    nextAction: "Estate planning",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Daniel Kim",
    email: "daniel.k@example.com",
    phone: "(555) 345-9012",
    status: "Prospect",
    lastContacted: "2024-03-08",
    nextAction: "Investment proposal",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    phone: "(555) 456-0123",
    status: "Active",
    lastContacted: "2024-03-07",
    nextAction: "Insurance review",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Ethan Thompson",
    email: "ethan.t@example.com",
    phone: "(555) 567-1234",
    status: "Engaged",
    lastContacted: "2024-03-06",
    nextAction: "Tax optimization",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Ava Nguyen",
    email: "ava.n@example.com",
    phone: "(555) 678-2345",
    status: "Prospect",
    lastContacted: "2024-03-05",
    nextAction: "Initial meeting",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Lucas Wright",
    email: "lucas.w@example.com",
    phone: "(555) 789-3456",
    status: "Active",
    lastContacted: "2024-03-04",
    nextAction: "Portfolio rebalance",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Isabella Patel",
    email: "isabella.p@example.com",
    phone: "(555) 890-4567",
    status: "Engaged",
    lastContacted: "2024-03-03",
    nextAction: "Retirement planning",
    assignedAdvisor: "Michael Brown"
  },
  {
    name: "Mason Singh",
    email: "mason.s@example.com",
    phone: "(555) 901-5678",
    status: "Prospect",
    lastContacted: "2024-03-02",
    nextAction: "Follow-up call",
    assignedAdvisor: "Sarah Smith"
  },
  {
    name: "Charlotte Brown",
    email: "charlotte.b@example.com",
    phone: "(555) 012-6789",
    status: "Active",
    lastContacted: "2024-03-01",
    nextAction: "Document signing",
    assignedAdvisor: "Michael Brown"
  }
]

const recentActivity = [
  { type: "call", text: "Call scheduled for March 25", contact: "John Doe" },
  { type: "email", text: "Email sent - Follow-up in 3 days", contact: "Jane Smith" },
  { type: "status", text: "Marked as Engaged", contact: "Alex Johnson" },
]

const upcomingTasks = [
  { text: "Follow up with Sarah", date: "March 26" },
  { text: "Send proposal to Mark", date: "March 28" },
  { text: "Update client details for Lisa", date: "March 29" },
]

type SortField = "name" | "email" | "status" | "lastContacted" | "nextAction"
type SortDirection = "asc" | "desc"
type SearchField = "all" | "name" | "email" | "phone" | "status" | "nextAction"

export default function ContactsPage() {
  const [sortField, setSortField] = useState<SortField>("name")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchField, setSearchField] = useState<SearchField>("all")
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [nextActionFilter, setNextActionFilter] = useState<string>("all")

  // Get unique values for filters
  const uniqueStatuses = Array.from(new Set(contacts.map(contact => contact.status)))
  const uniqueNextActions = Array.from(new Set(contacts.map(contact => contact.nextAction)))

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleSearch = (contact: typeof contacts[0]) => {
    if (!searchQuery && statusFilter === "all" && nextActionFilter === "all") return true
    
    const query = searchQuery.toLowerCase()
    const matchesSearch = !searchQuery || (
      searchField === "all" ? (
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.phone.toLowerCase().includes(query) ||
        contact.status.toLowerCase().includes(query) ||
        contact.nextAction.toLowerCase().includes(query)
      ) : contact[searchField].toLowerCase().includes(query)
    )

    const matchesStatus = statusFilter === "all" || contact.status === statusFilter
    const matchesNextAction = nextActionFilter === "all" || contact.nextAction === nextActionFilter

    return matchesSearch && matchesStatus && matchesNextAction
  }

  const filteredContacts = contacts
    .filter(handleSearch)
    .sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue)
      }
      return bValue.localeCompare(aValue)
    })
    .slice(0, rowsPerPage)

  const renderColumnHeader = (field: SortField, label: string, hasFilter: boolean = false) => {
    const uniqueValues = hasFilter ? Array.from(new Set(contacts.map(contact => contact[field]))) : []
    const currentFilter = field === "status" ? statusFilter : nextActionFilter
    const setFilter = field === "status" ? setStatusFilter : setNextActionFilter

    return (
      <TableHead className="h-10 px-4 text-left align-middle font-medium text-[#2B7A78]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#3AAFA9] focus:outline-none">
            {label}
            <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            className="w-48 bg-[#FEFFFF] border-[#DEF2F1] shadow-sm"
          >
            <DropdownMenuItem 
              onClick={() => handleSort(field)} 
              className="flex items-center gap-2 text-[#2B7A78] hover:bg-[#DEF2F1] hover:text-[#3AAFA9] focus:bg-[#DEF2F1] focus:text-[#3AAFA9] cursor-pointer"
            >
              <ArrowUpDown className="h-4 w-4" />
              {sortField === field ? (
                <span>Sort {sortDirection === "asc" ? "Ascending" : "Descending"}</span>
              ) : (
                <span>Sort</span>
              )}
            </DropdownMenuItem>
            {hasFilter && (
              <>
                <DropdownMenuItem className="flex items-center gap-2 text-[#2B7A78] hover:bg-[#DEF2F1] hover:text-[#3AAFA9] focus:bg-[#DEF2F1] focus:text-[#3AAFA9] cursor-pointer">
                  <Filter className="h-4 w-4" />
                  <select
                    className="w-full bg-transparent focus:outline-none text-[#2B7A78] cursor-pointer"
                    value={currentFilter}
                    onChange={(e) => setFilter(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="all" className="text-[#2B7A78]">All {label}s</option>
                    {uniqueValues.map((value) => (
                      <option key={value} value={value} className="text-[#2B7A78]">{value}</option>
                    ))}
                  </select>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </TableHead>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#17252A]">Contacts</h2>
          <p className="text-[#3AAFA9] mt-1">Manage your client contacts and interactions</p>
        </div>
        <Button className="bg-[#3AAFA9] hover:bg-[#2B7A78] text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Contact
        </Button>
      </div>

      {/* Overview Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#2B7A78]">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#17252A]">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4">
        {/* Contacts Table */}
        <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium text-[#2B7A78]">Contacts List</CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#2B7A78]">Show</span>
                  <select 
                    className="h-8 rounded-md border border-[#DEF2F1] bg-white px-2 text-sm focus:border-[#3AAFA9] focus:outline-none"
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  <span className="text-sm text-[#2B7A78]">rows</span>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#3AAFA9]" />
                      <Input 
                        placeholder="Search contacts..." 
                        className="pl-8 border-[#DEF2F1] focus:border-[#3AAFA9] w-[200px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2 top-2.5 text-[#3AAFA9] hover:text-[#2B7A78]"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <select
                      className="h-8 rounded-md border border-[#DEF2F1] bg-white px-2 text-sm focus:border-[#3AAFA9] focus:outline-none"
                      value={searchField}
                      onChange={(e) => setSearchField(e.target.value as SearchField)}
                    >
                      <option value="all">All Fields</option>
                      <option value="name">Name</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="status">Status</option>
                      <option value="nextAction">Next Action</option>
                    </select>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="border-[#DEF2F1] hover:bg-[#DEF2F1]/50 hover:border-[#3AAFA9]">
                  <Filter className="h-4 w-4 text-[#3AAFA9]" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-[#DEF2F1]">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#DEF2F1] bg-[#DEF2F1]/50">
                    {renderColumnHeader("name", "Name")}
                    {renderColumnHeader("email", "Email")}
                    <TableHead className="h-10 px-4 text-left align-middle font-medium text-[#2B7A78]">Phone</TableHead>
                    {renderColumnHeader("status", "Status", true)}
                    {renderColumnHeader("lastContacted", "Last Contacted")}
                    {renderColumnHeader("nextAction", "Next Action", true)}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact.email} className="border-b border-[#DEF2F1] hover:bg-[#DEF2F1]/50">
                      <TableCell className="p-4 text-[#17252A]">{contact.name}</TableCell>
                      <TableCell className="p-4 text-[#17252A]">{contact.email}</TableCell>
                      <TableCell className="p-4 text-[#17252A]">{contact.phone}</TableCell>
                      <TableCell className="p-4">
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-[#DEF2F1] text-[#3AAFA9]">
                          {contact.status}
                        </span>
                      </TableCell>
                      <TableCell className="p-4 text-[#17252A]">{contact.lastContacted}</TableCell>
                      <TableCell className="p-4 text-[#17252A]">{contact.nextAction}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 