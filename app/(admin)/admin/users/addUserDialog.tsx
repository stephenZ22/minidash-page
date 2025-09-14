"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { useForm } from "@tanstack/react-form";
import { mini_dash_api } from "@/lib/axios";

interface User {
  name: string;
  email: string;
  password: string;
}

const default_user: User = { name: "", email: "", password: "12345" };

const AddUserDialog = () => {
  const form = useForm<User>({
    defaultValues: default_user,
    onSubmit: async ({ value }) => {
      // alert("form submit: " + JSON.stringify(value));
      console.log("sssssssss");
      const res = await mini_dash_api.post("users", value);
      // alert(JSON.stringify(res.data));
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            // e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4 mt-4"
        >
          <form.Field
            name="name"
            children={(field) => (
              <Input
                placeholder="name"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          <form.Field
            name="email"
            children={(field) => (
              <Input
                placeholder="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />

          <form.Field
            name="password"
            children={(field) => (
              <Input
                placeholder="password"
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { AddUserDialog };
