import React, { useState } from "react";
import Heading from "../../Components/Heading";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUploadBB } from "../../../../utils";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
function UploadMaterials() {
  const [loading, setLoading] = useState(false);

  const data = useLoaderData();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  //console.log(data);

  const { sessionTitle, _id, tutor } = data;

  const { mutateAsync } = useMutation({
    mutationFn: async (materials) => {
      await axiosSecure.put(`/material/update`, materials);
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      toast.success("Upload Material Successfully!");
      navigate("/dashboard/view-materials");
      setLoading(false);
    },
  });
  //   Form handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const image = form.image.files[0];
    const gdriveLink = form.glink.value;

    try {
      const imageBB = await imageUploadBB(image);
      const materials = {
        sessionTitle,
        sessionId: _id,
        tutorEmail: tutor.email,
        imageBB,
        gdriveLink,
      };
      console.table(materials);

      //   Post request to server
      await mutateAsync(materials);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Heading title={"Upload Material"}  label={"Create Session"} link={'add-session'}/>

      <div className="row g-4">
        <div className="col-12">
          <form onSubmit={handleFormSubmit}>
            <div className="content">
              <div className="">
                <div className="card shadow">
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Import Image And File Link</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="image" className="block mb-2 text-sm">
                            Select Image:
                          </label>
                          <input
                            required
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <fieldset className="" id="__BVID__698262___BV___">
                          <legend
                            id="__BVID__150103___BV__BV_label___"
                            tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0"
                          >
                            Required File Link*
                          </legend>
                          <div className="">
                            <textarea
                              id="__BVID__250729___BV_input__"
                              className="form-control"
                              placeholder="Enter G-drive Link"
                              rows="2"
                              wrap="soft"
                              name="glink"
                            ></textarea>{" "}
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-primary">
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  " Save & Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadMaterials;
