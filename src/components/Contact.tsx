"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { z } from 'zod'

const formSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters.", }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters.", }),
    description: z.string().optional(),
    email: z.string().email().min(2, { message: "Email must be at least 2 characters.", }),
    phone_number: z.coerce.number().min(2, { message: "Phone number must be at least 2 characters.", }),
})

const Contact = () => {

    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });


    return (
        <section className='p-3 md:px-5 lg:px-[100px] pt-[7px] pb-[53px] bg-[#EEECEB]'>
            <div className='p-2 bg-white md:px-[54px] md:py-[51px]'>

                <motion.div
                    className='flex flex-col lg:flex-row gap-[6.5rem]'
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn()}
                >
                    <motion.div
                        className='flex flex-col gap-8 w-full lg:w-1/2'
                        variants={fadeIn("up", 0.1)}
                    >
                        <div className='flex flex-col gap-4'>
                            <motion.div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>
                                Contact Us
                            </motion.div>
                            <motion.h1 className='font-extrabold text-4xl text-[#939393]'>
                                Get in touch with Claudia
                            </motion.h1>
                            <motion.h2 className='font-light text-base text-[#939393] line-clamp-3'>
                                We are here to support you on your journey to emotional wellness...
                            </motion.h2>
                        </div>

                        <motion.div className="relative flex justify-center lg:w-fit h-fit" variants={fadeIn("up", 0.2)}>
                            <div className="hidden xl:inline w-[380px] h-[457px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
                            <Image
                                className="relative z-10"
                                alt="image gallery"
                                src="/Claudia.svg"
                                width={380}
                                height={457}
                                fetchPriority="high"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-full lg:w-1/2 flex flex-col items-center md:items-start'
                        variants={fadeIn("up", 0.3)}
                    >
                        <h1 className='font-avenir font-extrabold text-2xl text-[#131313] mb-2'>Ready for an expert consultation?</h1>
                        <h2 className='text-base text-[#131313]'>Let&apos;s begin 😊</h2>
                        <ContactForm />
                    </motion.div>
                </motion.div>
            </div>
        </section>

    )
}

export default Contact

const ContactForm = () => {
    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: 0,
            description: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const templateParams = {
            from_name: `${data.first_name} ${data.last_name}`,
            to_name: "Claudia",
            message: data.description,
            reply_to: data.email,
        };
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            toast("Email sent")
            form.reset();
        } catch (error) {
            toast.error('Failed to send email. Please try again.');
            console.error(error)
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn("up", 0.4)}
            className='mt-4 md:mt-11 flex justify-center items-start flex-col md:gap-6 w-full'>
            <div className="flex flex-col items-start justify-center lg:justify-between w-full md:flex-row gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 mb-6">
                            {["first_name", "last_name", "email", "number"].map((field, index) => (
                                <motion.div key={field} variants={fadeIn("up", index * 0.1)}>
                                    <FormField
                                        control={form.control}
                                        name={field as "phone_number" | "first_name" | "last_name" | "description" | "email"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-[#131313] md:text-base">{field.name.replace("_", " ")}</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="w-full py-[10px] px-4 border rounded-[8px]" placeholder={field.name.replace("_", " ")} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeIn("up", 0.5)}>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormDescription className="text-[#131313] mb-2">What are you seeking support with?</FormDescription>
                                        <Textarea {...field} placeholder="I am seeking therapy because..." />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>

                        <motion.div className="w-fit mt-8" variants={fadeIn("up", 0.6)}>
                            <Button type="submit" className="h-14 bg-[#C99D86] hover:bg-[#d8bdaf] w-[361px] py-2 px-5 text-white">Send Message</Button>
                        </motion.div>
                    </form>
                </Form>
            </div>
        </motion.div>
    )
}

