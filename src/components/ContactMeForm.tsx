import { type FC, type ChangeEvent, type FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactLinks from "@/components/ContactLinks";

interface FormData extends Record<string, string> {
  name: string;
  email: string;
  message: string;
}

interface NotifyProps {
  success: boolean;
  errorText?: string;
}

const ContactMeForm: FC = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);

  // toast notification for message sent
  const notify = ({ success, errorText }: NotifyProps) =>
    toaster.create({
      title: success ? "Your message was sent." : "Your message was not sent.",
      description: success
        ? "I'll be sure to get back to you ASAP!"
        : `Something went wrong! Please give it another try, or feel free to email me directly.`,
      duration: 5000,
    });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        formData,
        process.env.REACT_APP_USER_ID as string
      );
      notify({ success: true });
      setFormData(initialFormData);
    } catch (error) {
      notify({ success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <ContactLinks />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-orange/90 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              <>
                Send message
                <PaperAirplaneIcon className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMeForm;
