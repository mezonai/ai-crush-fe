import React from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { GENDER } from '@/consts/common';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { registerFormSchema, type RegisterFormInput } from '../forms/schema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MultipleChoices from '@/components/MultipleChoices';
import RequiredMark from '@/components/RequiredMark';

type RegisterFormProps = {
  userFavorites: { id: number; value: string }[];
  userInformation: {
    avatarUrl: string;
    email: string;
    identityId: string;
    webAppData: string;
  };
  onSubmit?: (data: RegisterFormInput) => Promise<void>;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  userInformation,
  onSubmit = async () => {},
  userFavorites = [],
}) => {
  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      gender: GENDER.MALE,
      userName: '',
      identityId: userInformation.identityId || '',
      email: userInformation.email || '',
      favorites: [],
      age: undefined,
      avatarUrl: userInformation.avatarUrl || '',
      webAppData: userInformation.webAppData || '',
    },
  });

  return (
    <Form {...form}>
      <form className="w-full h-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col h-full gap-4 pt-[48px]">
          <h2 className="text-[#8C0F3E] text-2xl text-center font-bold">Thông tin của bạn</h2>
          <div className="flex justify-center mt-[16px] items-center">
            <Avatar className="w-[96px] h-[96px]">
              <AvatarImage src={userInformation.avatarUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Tên hiển thị
                    <RequiredMark />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Nhâp tên hiển thị"
                      className="bg-white max-w-xl h-[40px] border-[1px] border-[#D5D7DA]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-0 pb-0 text-sm font-bold">
                    Giới tính
                    <RequiredMark />
                  </FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className="flex gap-4" defaultValue={GENDER.MALE}>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="male" id="1" />
                        </FormControl>
                        <Label htmlFor="1" className="!mt-0">
                          Nam
                        </Label>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="female" id="2" />
                        </FormControl>
                        <Label htmlFor="2" className="!mt-0">
                          Nữ
                        </Label>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form?.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-0 pb-0 text-sm font-bold">
                    Tuổi
                    <RequiredMark />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Nhập số tuổi"
                      className="bg-white max-w-xl h-[40px] border-[1px] border-[#D5D7DA]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {userFavorites.length > 0 && (
              <FormField
                control={form?.control}
                name="favorites"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-0 pb-0 text-sm font-bold">
                      Sở thích
                      <RequiredMark />
                    </FormLabel>
                    <div className="flex flex-row gap-6 flex-wrap">
                      <MultipleChoices
                        choices={userFavorites.map((item) => ({
                          id: item.id,
                          displayName: item.value,
                          value: item.value,
                          isChecked: false,
                        }))}
                        onChange={(choices) =>
                          field.onChange(
                            choices
                              .filter((choice) => choice.isChecked)
                              .map((choice) => ({ id: choice.id, value: choice.value })),
                          )
                        }
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="flex w-full flex-1 items-end justify-center">
            <Button
              variant={'default'}
              type="submit"
              size="lg"
              className="w-full rounded-[100px] text-base font-bold"
              disabled={form.formState.isSubmitting}>
              Tiếp tục
              <img src="/icons/continue-icon.svg" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
