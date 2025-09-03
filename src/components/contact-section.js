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
      subject: 'Product Purchase Inquiry',
      message: '',
    },
  })

  function onSubmit(values) {
    const { firstName, lastName, email, subject, message } = values

    // Create a form element dynamically
    const form = document.createElement('form')
    form.action = 'https://formsubmit.co/RayXu@fermienergy.com'
    form.method = 'POST'
    form.style.display = 'none'

    // Add form fields
    const fields = {
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
      Subject: subject,
      Message: message,
      _captcha: 'false',
      _next: window.location.origin + '/thank-you', // Redirect after submission
    }

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Section Title */}
        <div className="text-center mb-16">
          <p className="text-label mb-4 text-accent-red">Contact</p>
          <h2 className="text-display text-center">Connect With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Contact Information */}
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex gap-2 mb-1">
                  <Building2 style={{ color: '#B31942' }} />
                  <div className="text-card-title">Find us</div>
                </div>
                <div className="text-body">
                  <div className="mb-2">
                    <strong>Headquarter:</strong>
                    <br />
                    120 Hawley Street
                    <br />
                    Binghamton, NY 13901
                  </div>
                  <div>
                    <strong>R&D facility:</strong>
                    <br />
                    1872 Pratt Drive
                    <br />
                    Blacksburg, VA 24060
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <Building2 style={{ color: '#B31942' }} />
                  <div className="text-card-title">LinkedIn</div>
                </div>
                <div className="text-body">
                  <a
                    href="https://www.linkedin.com/company/fermienergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://www.linkedin.com/company/fermienergy
                  </a>
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
                              placeholder="Enter Your First Name"
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
                              placeholder="Enter Your Last Name"
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
                              placeholder="Enter Your Email"
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
                              <SelectItem
                                value="Product Purchase Inquiry"
                                className="hover:bg-gray-100"
                              >
                                Product Purchase Inquiry
                              </SelectItem>
                              <SelectItem value="Request for Samples" className="hover:bg-gray-100">
                                Request for Samples
                              </SelectItem>
                              <SelectItem
                                value="Technical Support / Product Information"
                                className="hover:bg-gray-100"
                              >
                                Technical Support / Product Information
                              </SelectItem>
                              <SelectItem
                                value="Collaboration / Partnership"
                                className="hover:bg-gray-100"
                              >
                                Collaboration / Partnership
                              </SelectItem>
                              <SelectItem
                                value="Investment Opportunity"
                                className="hover:bg-gray-100"
                              >
                                Investment Opportunity
                              </SelectItem>
                              <SelectItem
                                value="Media / Press Inquiry"
                                className="hover:bg-gray-100"
                              >
                                Media / Press Inquiry
                              </SelectItem>
                              <SelectItem
                                value="Careers / Internship Opportunities"
                                className="hover:bg-gray-100"
                              >
                                Careers / Internship Opportunities
                              </SelectItem>
                              <SelectItem
                                value="General Inquiry / Other"
                                className="hover:bg-gray-100"
                              >
                                General Inquiry / Other
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
                              placeholder="Your Message..."
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
