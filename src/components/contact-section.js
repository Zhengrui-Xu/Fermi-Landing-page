'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Building2, Clock, Mail, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactSection = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Battery Technology',
      message: '',
    },
  })

  function onSubmit(values) {
    const { firstName, lastName, email, subject, message } = values
    console.log(values)

    // Update the email to match Fermi Energy contact
    const mailToLink = `mailto:fenglin@fermienergy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello, I am ${firstName} ${lastName}.\n\nMy email is: ${email}\n\nMessage:\n${message}`)}`

    window.location.href = mailToLink
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Contact Information */}
          <div>
            <div className="mb-4">
              <h2 className="text-lg mb-2 tracking-wider font-heading" style={{ color: '#B31942' }}>
                Contact
              </h2>

              <h2
                className="text-3xl md:text-4xl font-bold font-heading"
                style={{ color: '#000000' }}
              >
                Connect With Us
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex gap-2 mb-1">
                  <Building2 style={{ color: '#B31942' }} />
                  <div className="font-bold font-heading" style={{ color: '#000000' }}>
                    Find us
                  </div>
                </div>
                <div className="font-body" style={{ color: '#000000' }}>
                  1872 Pratt Drive, Suite 1205
                  <br />
                  Blacksburg, VA 24060
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <Phone style={{ color: '#B31942' }} />
                  <div className="font-bold font-heading" style={{ color: '#000000' }}>
                    Call us
                  </div>
                </div>
                <div className="font-body" style={{ color: '#000000' }}>
                  Contact for phone number
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <Mail style={{ color: '#B31942' }} />
                  <div className="font-bold font-heading" style={{ color: '#000000' }}>
                    Mail Us
                  </div>
                </div>
                <div className="font-body" style={{ color: '#000000' }}>
                  fenglin@fermienergy.com
                  <br />
                  rayxu@fermienergy.com
                </div>
              </div>

              <div>
                <div className="flex gap-2">
                  <Clock style={{ color: '#B31942' }} />
                  <div className="font-bold font-heading" style={{ color: '#000000' }}>
                    Visit us
                  </div>
                </div>
                <div className="font-body" style={{ color: '#000000' }}>
                  <div>Monday - Friday</div>
                  <div>8 AM - 4 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="border-gray-200 bg-white shadow-sm">
            <CardHeader className="text-primary text-2xl">
              {/* Empty header to match design */}
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                  <div className="flex flex-col md:!flex-row gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="font-heading" style={{ color: '#000000' }}>
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Leopold"
                              {...field}
                              className="border-gray-300 font-body focus:border-blue-500 bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="font-heading" style={{ color: '#000000' }}>
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Miranda"
                              {...field}
                              className="border-gray-300 font-body focus:border-blue-500 bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading" style={{ color: '#000000' }}>
                            E-mail
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="leopoldmiranda@gmail.com"
                              {...field}
                              className="border-gray-300 font-body focus:border-blue-500 bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading" style={{ color: '#000000' }}>
                            Subject
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 font-body focus:border-blue-500 bg-white">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border-gray-200">
                              <SelectItem value="Battery Technology" className="hover:bg-gray-100">
                                Battery Technology
                              </SelectItem>
                              <SelectItem value="Quantum Engineering" className="hover:bg-gray-100">
                                Quantum Engineering
                              </SelectItem>
                              <SelectItem value="Materials Science" className="hover:bg-gray-100">
                                Materials Science
                              </SelectItem>
                              <SelectItem
                                value="Investment Opportunity"
                                className="hover:bg-gray-100"
                              >
                                Investment Opportunity
                              </SelectItem>
                              <SelectItem value="Partnership" className="hover:bg-gray-100">
                                Partnership
                              </SelectItem>
                              <SelectItem
                                value="Research Collaboration"
                                className="hover:bg-gray-100"
                              >
                                Research Collaboration
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading" style={{ color: '#000000' }}>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Your message..."
                              className="resize-none border-gray-300 font-body focus:border-blue-500 bg-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-4 text-white font-heading btn-text hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#B31942' }}
                  >
                    Send message
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
