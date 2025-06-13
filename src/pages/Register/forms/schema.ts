import { z } from 'zod';

export const registerFormSchema = z.object({
  userName: z.string().min(1, { message: 'Nhập tên' }),
  email: z.string(),
  avatarUrl: z.string({ message: 'ニックネームを入力してください。' }),
  favorites: z.array(z.object({
    id : z.number(),
    value: z.string({ message: 'Hãy chọn sở thích của bạn' })
  })),
  identityId: z.string(),
  age: z
    .string({ message: 'Nhập số tuổi' })
    .min(1, { message: 'Nhập số tuổi' })
    .refine((val) => {
      const numVal = Number(val);
      return !isNaN(numVal) && numVal > 0;
    }),
  gender: z.string({ message: 'Hãy chọn giới tính' }),
  description: z
    .string({ message: 'Hãy nhập mô tả về bạn' })
    .min(1, { message: 'Hãy nhập mô tả về bạn' }),
  webAppData: z.string(),
});

export type RegisterFormInput  = z.infer<typeof registerFormSchema>;
