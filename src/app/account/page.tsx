import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, CreditCard, Settings, LogOut } from "lucide-react"

export default function AccountPage() {
    return (
        <div className="py-12 md:py-20 bg-secondary/10 min-h-screen">
            <Container>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="md:w-64 space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-serif text-primary">
                                JD
                            </div>
                            <div>
                                <p className="font-bold">Jane Doe</p>
                                <p className="text-xs text-muted-foreground">Member since 2023</p>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-2">
                            <Button variant="ghost" className="justify-start">
                                <Package className="w-4 h-4 mr-2" /> Orders
                            </Button>
                            <Button variant="ghost" className="justify-start">
                                <CreditCard className="w-4 h-4 mr-2" /> Subscriptions
                            </Button>
                            <Button variant="ghost" className="justify-start">
                                <Settings className="w-4 h-4 mr-2" /> Settings
                            </Button>
                            <Button variant="ghost" className="justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                                <LogOut className="w-4 h-4 mr-2" /> Log Out
                            </Button>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold font-serif mb-6">My Account</h1>

                        <Tabs defaultValue="orders" className="space-y-6">
                            <TabsList>
                                <TabsTrigger value="orders">Order History</TabsTrigger>
                                <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>

                            <TabsContent value="orders" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Recent Orders</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map((order) => (
                                                <div key={order} className="flex justify-between items-center py-4 border-b last:border-0">
                                                    <div>
                                                        <p className="font-medium">Order #1234{order}</p>
                                                        <p className="text-sm text-muted-foreground">Placed on Oct {10 + order}, 2023</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-medium">$45.00</p>
                                                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="subscriptions">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Active Subscriptions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between items-center p-4 border rounded-lg bg-secondary/5">
                                            <div>
                                                <h3 className="font-bold font-serif">The Cookie Monster</h3>
                                                <p className="text-sm text-muted-foreground">Next delivery: Nov 15, 2023</p>
                                            </div>
                                            <Button variant="outline">Manage</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="settings">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Profile Settings</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">First Name</label>
                                                <Input defaultValue="Jane" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Last Name</label>
                                                <Input defaultValue="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input defaultValue="jane@example.com" />
                                        </div>
                                        <Button>Save Changes</Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </div>
    )
}

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
