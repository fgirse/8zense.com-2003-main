"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fileSchema = z.object({
  filename: z.string(),
  content: z.any(), // zod doesn't works well with instanceof(File) or FileList
});

const formSchema = z.object({
  username: z.string().min(2).max(50),
  attachments: z.array(fileSchema),
})

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      attachments: undefined,

    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        username: values.username,
        attachments: values.attachments,

      }),
    });

    if (response.ok) {
      console.log("ok");
    } else {
      console.log("not ok");
    }
  }
  return (
    <main className=" bg-zenseGrey flex flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input className="text-slate-800" placeholder="max mustermann" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
  control={form.control}
  name="attachments"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Attachments</FormLabel>
      <FormControl>
        <Input
          type="file"
          multiple
          onChange={async (e) => {
            const files = e.target.files;
            if (files) {
              const filesArray = Array.from(files).map(async (file) => {
                const fileContent = await file.arrayBuffer();
                return {
                  filename: file.name,
                  content: Buffer.from(fileContent).toString('base64'),
                };
              });
              Promise.all(filesArray).then((filesArray) => {
                field.onChange(filesArray);
              });
            }
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
           

          <Button className="bg-slate-500 hover:border hover:bg-slate-400" type="submit">senden</Button>
        </form>
      </Form>

    </main>
  );
}