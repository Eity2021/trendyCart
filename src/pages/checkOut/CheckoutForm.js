import React from "react";

export default function CheckoutForm() {
  return (
    <div>
      <div className="mb-8">
        <h2 className=" text-header text-lg uppercase font-bold">
          Billing information
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-header uppercase">
            first name <sup className="text-[#FF0000] ">*</sup>
          </label>

          <div class="w-full  pt-2">
            <input
              type="text"
              placeholder="First Name.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-header uppercase">
            last name <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Last Name.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-header uppercase">
            company name{" "}
            <span className="text-sm text-text-paragraph uppercase ">
              (Optional)
            </span>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Company Name.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-header uppercase">
            country/religion <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <select class="select select-bordered w-full rounded-none focus:outline-none placeholder:text-sm">
              <option disabled selected>
                Country
              </option>
              <option>Afghanistan</option>
              <option>Bangladesh</option>
              <option>Belgium</option>
              <option>Bhutan</option>
              <option>China</option>
              <option>Croatia</option>
              <option>Denmark</option>
              <option>Egypt</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-3">
        <div>
          <label className="text-sm text-header uppercase">
            street address <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Street Address.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div>
          <label className="text-sm text-header uppercase">
            town / city <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Street Address.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-header uppercase">
            state<sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Street Address.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-header uppercase">
            postal zip <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Street Address.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-header uppercase">
            your phone<sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Your Phone."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-3">
        <div>
          <label className="text-sm text-header uppercase">
            email address <sup className="text-[#FF0000] ">*</sup>
          </label>
          <div class="w-full pt-2">
            <input
              type="text"
              placeholder="Email Address.."
              class="input input-bordered w-full rounded-none focus:outline-none placeholder:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 my-8">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary w-4 h-4 rounded-none [--chkfg:white]"
            />
          </label>
        </div>
        <p className="uppercase text-header font-bold text-sm flex items-center">
          ship to a different address
        </p>
      </div>

      <div className="grid grid-cols-1 mt-3 ">
        <div>
          <label className="text-sm text-header uppercase">
            order you have notes{" "}
            <span className="text-sm text-text-paragraph uppercase ">
              (Optional)
            </span>
          </label>
          <div class="w-full pt-2">
            <textarea
              type="text"
              placeholder="About Your Special Delivery Notes.."
              class="textarea textarea-bordered w-full rounded-none focus:outline-none placeholder:text-sm h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
