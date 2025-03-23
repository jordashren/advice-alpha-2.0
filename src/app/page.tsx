import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Bell, FileText, Clock, BarChart3, AlertCircle, LineChart, Settings, ArrowRight, Target, Heart, Shield, GraduationCap, Wallet, Building2, UserCheck, PieChart, Calendar, Newspaper, Globe, DollarSign, TrendingDown, Pencil } from "lucide-react"
import Link from "next/link"
import { WorldMap } from "@/components/world-map"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AUMChart } from "@/components/aum-chart"
import { NewsCarousel } from "@/components/news-carousel"
import { MarketOverview } from "@/components/market-overview"

interface MarketData {
  index: string;
  value: number;
  change: string;
  trend: 'up' | 'down';
}

interface NewsItem {
  title: string;
  source: string;
  time: string;
  category: string;
}

const marketData: MarketData[] = [
  { index: "Equities", value: 45, change: "+2.5%", trend: "up" },
  { index: "Fixed Income", value: 30, change: "-1.2%", trend: "down" },
  { index: "Cash", value: 15, change: "+0.5%", trend: "up" },
  { index: "Alternatives", value: 10, change: "+1.8%", trend: "up" },
]

const newsItems: NewsItem[] = [
  { title: "SARB Maintains Interest Rates Amid Inflation Concerns", source: "Business Day", time: "2h ago", category: "Monetary Policy" },
  { title: "JSE Gains on Mining Sector Strength", source: "Fin24", time: "4h ago", category: "Markets" },
  { title: "SA Investment Funds Show Strong Growth in Q4", source: "Moneyweb", time: "5h ago", category: "Investment" },
  { title: "Eskom Announces New Power Generation Plans", source: "Business Day", time: "6h ago", category: "Energy" },
  { title: "SA Banks Report Strong Q4 Earnings", source: "Fin24", time: "7h ago", category: "Banking" },
  { title: "Property Market Shows Signs of Recovery", source: "Moneyweb", time: "8h ago", category: "Real Estate" },
  { title: "Retail Sector Faces Headwinds in 2024", source: "Business Day", time: "9h ago", category: "Retail" },
  { title: "SA Tech Startups Attract Record Investment", source: "Fin24", time: "10h ago", category: "Technology" },
  { title: "Agricultural Sector Reports Strong Growth", source: "Moneyweb", time: "11h ago", category: "Agriculture" },
  { title: "Tourism Sector Recovery Exceeds Expectations", source: "Business Day", time: "12h ago", category: "Tourism" },
]

const aumData = [
  { date: '2018', value: 1500000000 },
  { date: '2019', value: 1680000000 },
  { date: '2020', value: 1650000000 },
  { date: '2021', value: 2050000000 },
  { date: '2022', value: 1980000000 },
  { date: '2023', value: 2450000000 },
  { date: '2024', value: 2520000000 },
  { date: '2025', value: 2850000000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome, Jordan</h2>
          <p className="text-[#3AAFA9] mt-1">Your financial advisory dashboard</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2B7A78]">Total AUM</CardTitle>
            <DollarSign className="h-4 w-4 text-[#3AAFA9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#17252A]">R2.45B</div>
            <p className="text-xs text-[#2B7A78]">+8.2% YTD</p>
          </CardContent>
        </Card>
        <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2B7A78]">Client Base</CardTitle>
            <Users className="h-4 w-4 text-[#3AAFA9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#17252A]">1,234</div>
            <p className="text-xs text-[#2B7A78]">+12 new this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2B7A78]">Portfolio Health</CardTitle>
            <Shield className="h-4 w-4 text-[#3AAFA9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#17252A]">98%</div>
            <p className="text-xs text-[#2B7A78]">Risk-adjusted return</p>
          </CardContent>
        </Card>
        <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2B7A78]">Client Satisfaction</CardTitle>
            <Heart className="h-4 w-4 text-[#3AAFA9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#17252A]">4.8/5</div>
            <p className="text-xs text-[#2B7A78]">Based on 156 reviews</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#2B7A78] flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {[
                { event: "Client Portfolio Review - John Smith", date: "Today, 2:00 PM", type: "Meeting" },
                { event: "Investment Committee Meeting", date: "Tomorrow, 10:00 AM", type: "Internal" },
                { event: "Tax Planning Workshop", date: "23 Mar, 3:00 PM", type: "Workshop" },
                { event: "Quarterly Client Review - Sarah Johnson", date: "25 Mar, 11:00 AM", type: "Meeting" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-1.5 rounded-lg transition-colors duration-200 hover:bg-[#DEF2F1]/50">
                  <div className="space-y-0.5">
                    <div className="text-xs font-medium text-[#17252A]">{item.event}</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] text-[#3AAFA9]">{item.type}</span>
                      <span className="text-[11px] text-[#2B7A78]">•</span>
                      <span className="text-[11px] text-[#2B7A78]">{item.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-3 w-3 text-[#3AAFA9]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#2B7A78] flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {[
                { message: "Portfolio rebalancing required for 3 clients", time: "10m ago", priority: "high" },
                { message: "New regulatory compliance update available", time: "1h ago", priority: "medium" },
                { message: "Client document uploaded - Investment Policy", time: "2h ago", priority: "low" },
                { message: "Market alert: JSE All Share hits new high", time: "3h ago", priority: "medium" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-1.5 rounded-lg transition-colors duration-200 hover:bg-[#DEF2F1]/50">
                  <div className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    item.priority === "high" ? "bg-red-500" :
                    item.priority === "medium" ? "bg-yellow-500" :
                    "bg-green-500"
                  )} />
                  <div className="flex-1 space-y-0.5">
                    <p className="text-xs text-[#17252A]">{item.message}</p>
                    <p className="text-[11px] text-[#2B7A78]">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#2B7A78]">AUM Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <AUMChart data={aumData} />
          </CardContent>
        </Card>
        <div className="col-span-3 space-y-4">
          <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[#2B7A78] flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { action: "Schedule Review", icon: Calendar, color: "text-blue-500" },
                  { action: "New Client", icon: UserCheck, color: "text-green-500" },
                  { action: "Portfolio", icon: PieChart, color: "text-purple-500" },
                  { action: "Reports", icon: FileText, color: "text-orange-500" },
                ].map((item) => (
                  <Button
                    key={item.action}
                    variant="outline"
                    className="h-[80px] flex flex-col items-center justify-center gap-2 hover:bg-[#DEF2F1]/50 transition-colors duration-200 border-[#DEF2F1]/50"
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-xs font-medium text-[#2B7A78]">{item.action}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[#2B7A78]">Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#DEF2F1]/50 rounded-lg h-[72px]">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-[#3AAFA9]" />
                      <div>
                        <p className="text-sm font-medium text-[#2B7A78]">JSE All Share</p>
                        <p className="text-xs text-[#3AAFA9]">South Africa</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#2B7A78]">73,245.32</p>
                      <p className="text-xs text-emerald-500">+1.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#DEF2F1]/50 rounded-lg h-[72px]">
                    <div className="flex items-center space-x-3">
                      <TrendingDown className="h-5 w-5 text-[#3AAFA9]" />
                      <div>
                        <p className="text-sm font-medium text-[#2B7A78]">USD/ZAR</p>
                        <p className="text-xs text-[#3AAFA9]">Forex</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#2B7A78]">18.45</p>
                      <p className="text-xs text-red-500">-0.3%</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#DEF2F1]/50 rounded-lg h-[72px]">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-[#3AAFA9]" />
                      <div>
                        <p className="text-sm font-medium text-[#2B7A78]">S&P 500</p>
                        <p className="text-xs text-[#3AAFA9]">United States</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#2B7A78]">4,783.83</p>
                      <p className="text-xs text-emerald-500">+0.8%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#DEF2F1]/50 rounded-lg h-[72px]">
                    <div className="flex items-center space-x-3">
                      <TrendingDown className="h-5 w-5 text-[#3AAFA9]" />
                      <div>
                        <p className="text-sm font-medium text-[#2B7A78]">FTSE 100</p>
                        <p className="text-xs text-[#3AAFA9]">United Kingdom</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#2B7A78]">7,682.33</p>
                      <p className="text-xs text-red-500">-0.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <NewsCarousel items={newsItems} />
        </Card>
        <Card className="col-span-3 bg-[#FEFFFF] border-[#DEF2F1] hover:border-[#3AAFA9] transition-colors duration-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#2B7A78]">Risk Profile Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { risk: "Conservative", count: 45, progress: 35 },
                { risk: "Moderate", count: 78, progress: 55 },
                { risk: "Aggressive", count: 34, progress: 75 },
                { risk: "Very Aggressive", count: 12, progress: 90 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#17252A]">{item.risk}</span>
                    <span className="text-sm text-[#2B7A78]">{item.count} clients</span>
                  </div>
                  <div className="h-2 bg-[#DEF2F1] rounded-full">
                    <div className="h-2 bg-[#3AAFA9] rounded-full" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
