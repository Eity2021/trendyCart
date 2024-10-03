import React from "react";

export default function InfoMessage() {
  return (
    <div>
      <div className=" my-16  lg:mx-40 md:mx-24 mx-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="input input-bordered w-full max-w rounded-none bg-[#f4f4f4]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="input input-bordered w-full max-w rounded-none bg-[#f4f4f4] "
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w rounded-none bg-[#f4f4f4]"
              />
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full max-w rounded-none bg-[#f4f4f4]"
              />
            </div>

            <div>
              <textarea
                className="textarea textarea-bordered w-full max-w mt-4 rounded-none bg-[#f4f4f4]"
                placeholder="Enter Your Message"
                rows={5}
              ></textarea>
            </div>

            <div className="bg-loginColor  w-32 py-2 text-center rounded-md mt-6">
              <button className="text-white text-lg"> Submit</button>
            </div>
          </div>

          <div>
            <div className="rounded-lg">
              <iframe
                style={{ borderRadius: "4px" }}
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kompass%20,gulshan%20Dhaka%20+(Map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://maps-generator.com/"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
