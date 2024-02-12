import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCharacterProfile } from "../api/wowApi";

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
    <form onSubmit={handleSubmit(onSearch)}>
      <input
        {...register("region", { required: true })}
        placeholder="Region (e.g. us, eu)"
      />
      {errors.region && <span>Region is required</span>}
      <input {...register("realm", { required: true })} placeholder="Realm" />
      {errors.realm && <span>Realm is required</span>}

      <input
        {...register("characterName", { required: true })}
        placeholder="Character Name"
      />
      {errors.characterName && <span>Character Name is required</span>}
      {errors.apiError && <span>{errors.apiError.message}</span>}

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};
