import React from "react";
import { useForm } from "react-hook-form";
import { getFirestore, collection, addDoc } from "firebase/firestore";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ComplaintForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const db = getFirestore();
    try {
      await addDoc(collection(db, "complaints"), data);
      alert("Complaint submitted successfully");
    } catch (error) {
      console.error("Error adding complaint: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true })}
        placeholder="Your Name"
      />
      {errors.name && <p>This field is required</p>}

      <input
        {...register("email", { required: true })}
        placeholder="Your Email"
      />
      {errors.email && <p>This field is required</p>}

      <textarea
        {...register("message", { required: true })}
        placeholder="Your Complaint"
      />
      {errors.message && <p>This field is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ComplaintForm;
