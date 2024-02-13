import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCharacterProfile } from "../api/wowApi";
import tww from "../assets/tww-bg.jpg";

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSearch = async (data) => {
    setLoading(true);
    try {
      const raiderIoData = await fetchCharacterProfile(
        data.region,
        data.realm,
        data.characterName
      );
      navigate("/character", {
        state: { characterData: { ...raiderIoData } },
      });
    } catch (error) {
      setError("apiError", { message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSearch)}
      className="flex flex-col justify-center w-1/4 gap-4 p-4 m-4"
    >
      <input
        {...register("region", { required: true })}
        placeholder="Region (e.g. us, eu)"
        id="region"
        className="w-full p-2 border-2 border-gray-300 rounded-md"
      />
      {errors.region && <span>Region is required</span>}
      <input
        {...register("realm", { required: true })}
        placeholder="Realm"
        id="realm"
        className="w-full p-2 border-2 border-gray-300 rounded-md"
      />
      {errors.realm && <span>Realm is required</span>}

      <input
        {...register("characterName", { required: true })}
        placeholder="Character Name"
        id="characterName"
        className="w-full p-2 border-2 border-gray-300 rounded-md"
      />
      {errors.characterName && <span>Character Name is required</span>}
      {errors.apiError && <span>{errors.apiError.message}</span>}

      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 font-semibold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};
