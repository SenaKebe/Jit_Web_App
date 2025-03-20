"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import { IoMdCloudUpload } from "react-icons/io";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First Name is Required!" }),
  lastName: z.string().min(1, { message: "Last Name is Required!" }),
  phone: z.number().min(1, { message: "Phone is Required!" }),
  address: z.string().min(1, { message: "Address is Required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is Required!" }),
  birthday: z.date({ message: "Birthday is Required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is Required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-[#FFFB15] text-xl font-bold">Create a new Student</h1>
      <span className="text-gray-400 text-xs font-medium">
        Authentication Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.username}
        />
      </div>

      <span className="text-gray-400 text-xs font-medium">
        Personal Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          name="firstname"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastname"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />

        <div className="flex flex-col w-full gap-2 md:w-1/4">
          <label className="text-[#FFFB15] text-xs">Sex</label>
          <select
            className="p-2 rounded-md text-[#FFFB15] text-sm w-full ring-[1.5px] ring-gray-300"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option className="text-[#083765] font-bold" value="male">
              Male
            </option>
            <option className="text-[#083765] font-bold" value="female">
              Female
            </option>
          </select>
          {errors.sex?.message && (
            <p className="text-red-400 text-xs">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center w-full gap-2 md:w-1/4">
          <label
            className="flex text-[#FFFB15] text-xs cursor-pointer gap-2 items-center"
            htmlFor="img"
          >
            <IoMdCloudUpload className="text-[#FFFB15] text-[28px] font-bold" />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-red-400 text-xs">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-[#FFFB15] p-2 rounded-md text-[#083765] font-bold">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
