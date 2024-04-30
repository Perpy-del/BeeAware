import { Bookmark, Ellipsis } from 'lucide-react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FormSchema = z.object({
  type: z.enum(['improved', 'worse', 'none', 'divorced', 'all'], {
    required_error: 'You need to select a notification type.',
    invalid_type_error: 'Please select one from the list',
  }),
});

type Props = {
  type: string
};

const CommunityIntimacyComponent = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: `You commented on "${props.type}"`,
      description: `You selected "${data.type}", see other comments on the comments section.`,
      className: 'bg-baSecondary text-baLight dark:bg-baLight dark:text-baBody'
    })
  }

  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-5">
          <h2 className="text-headerSix lg:text-headerFour font-ba_normal">
            Intimacy
          </h2>
          <span className="text-baPrimary dark:text-baSecondary font-ba_normal text-smallSize lg:text-bodySize hover:font-ba_medium flex cursor-pointer">
            Follow
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="dark:text-baLight p-2 rounded-full hover:dark:bg-baSubtle cursor-pointer text-baDark hover:bg-baAccent hidden md:block">
              <Ellipsis />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-2 rounded-lg border-none bg-baLight dark:baSubtle dark:border dark:border-slate-800 w-fit"
          >
            <DropdownMenuItem
              className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baDark dark:text-baLight font-ba_normal"
            >
              🏃‍♀️ Start a new thread on Intimacy
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-4 py-2 space-x-2 hover:bg-baPrimary/50 dark:hover:bg-baBody dark:hover:rounded-lg text-baDark dark:text-baLight font-ba_normal"
            >
              👉 Follow Intimacy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="pt-10 lg:pt-20 pb-5 bg-baAccent px-5 rounded-[20px] mb-10">
        <h2 className="text-[18px] lg:text-headerFour text-baDark font-ba_normal pb-7 lg:pb-3 text-center">
          {props.type}
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="font-ba_normal text-baDark flex flex-col lg:flex-row sm:gap-5 lg:gap-10 justify-center items-center pb-7"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col md:flex-row gap-5 justify-center"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="improved" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          It&apos;s improved
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="worse" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          It&apos;s worse
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Nothing&apos;s changed
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="divorced" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Not divorced
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">All</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </Form>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div
              className="cursor-pointer flex items-center gap-2 hover:scale-110 ease-in-out duration-300 text-baError transition transform"
              title="Like"
            >
              <FaHeart size={24} /> 54
            </div>
            <div
              className="cursor-pointer flex items-center gap-2 hover:scale-110 ease-in-out duration-300 text-baDark transition transform"
              title="Comments"
            >
              <FaCommentDots size={24} /> 15
            </div>
          </div>
          <div
            className="hover:text-baSecondary text-baBody cursor-pointer hover:scale-110 ease-in-out duration-300 transition transform"
            onClick={() =>
              toast({
                title: 'Activity has been saved',
                description:
                  'Check the saved section to see all saved activities',
                className:
                  'bg-baSecondary text-baLight dark:bg-baLight dark:text-baBody',
              })
            }
          >
            <Bookmark />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityIntimacyComponent;
