"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface TopCast {
  image: string | File;
  name: string;
  role: string;
  episode: number;
  year: number;
}

interface Movie {
  title: string;
  poster: string | File;
  description: string;
  creators: string[];
  stars: string[];
  genre: string[];
  releaseYear: number;
  episodes: number;
  videos: number;
  photos: number;
  rating: number;
  ratingCount: number;
  language: string;
  country: string;
  duration: string;
  youtubeUrl: string;
  topCast: TopCast[];
  tags: string[];
}

interface UpdateModalProps {
  id: string;
  movie: Movie;
  onClose: () => void;
}

export default function UpdateModal({ id, movie, onClose }: UpdateModalProps) {
  const [updatedMovie, setUpdatedMovie] = useState<Movie>({ ...movie });
  const [posterPreview, setPosterPreview] = useState<string>(
    typeof movie.poster === "string" ? movie.poster : ""
  );

  const [currentCreator, setCurrentCreator] = useState("");
  const [currentStar, setCurrentStar] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const router = useRouter();

  // ✅ handle text change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ handle array fields
  const handleAddCreator = () => {
    if (currentCreator && !updatedMovie.creators.includes(currentCreator)) {
      setUpdatedMovie((prev) => ({
        ...prev,
        creators: [...prev.creators, currentCreator],
      }));
      setCurrentCreator("");
    }
  };

  const handleRemoveCreator = (creator: string) => {
    setUpdatedMovie((prev) => ({
      ...prev,
      creators: prev.creators.filter((c) => c !== creator),
    }));
  };

  const handleAddStar = () => {
    if (currentStar && !updatedMovie.stars.includes(currentStar)) {
      setUpdatedMovie((prev) => ({
        ...prev,
        stars: [...prev.stars, currentStar],
      }));
      setCurrentStar("");
    }
  };

  const handleRemoveStar = (star: string) => {
    setUpdatedMovie((prev) => ({
      ...prev,
      stars: prev.stars.filter((s) => s !== star),
    }));
  };

  const handleAddGenre = () => {
    if (currentGenre && !updatedMovie.genre.includes(currentGenre)) {
      setUpdatedMovie((prev) => ({
        ...prev,
        genre: [...prev.genre, currentGenre],
      }));
      setCurrentGenre("");
    }
  };

  const handleRemoveGenre = (genre: string) => {
    setUpdatedMovie((prev) => ({
      ...prev,
      genre: prev.genre.filter((g) => g !== genre),
    }));
  };

  // ✅ handle poster upload
  const handlePosterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPosterPreview(imageUrl);
      setUpdatedMovie((prev) => ({
        ...prev,
        poster: file,
      }));
    }
  };

  // ✅ handle top cast field change
  const handleTopCastChange = (
    index: number,
    field: keyof TopCast,
    value: string | number | File
  ) => {
    const newTopCast = [...updatedMovie.topCast];
    newTopCast[index] = { ...newTopCast[index], [field]: value };
    setUpdatedMovie((prev) => ({
      ...prev,
      topCast: newTopCast,
    }));
  };

  // ✅ handle top cast image change
  const handleTopCastImageChange = (index: number, file: File) => {
    const newTopCast = [...updatedMovie.topCast];
    newTopCast[index].image = file;
    setUpdatedMovie((prev) => ({
      ...prev,
      topCast: newTopCast,
    }));
  };

  // ✅ add new top cast
  const addTopCast = () => {
    setUpdatedMovie((prev) => ({
      ...prev,
      topCast: [
        ...prev.topCast,
        { image: "", name: "", role: "", episode: 0, year: 0 },
      ],
    }));
  };

  // ✅ remove top cast
  const removeTopCast = (index: number) => {
    const newTopCast = [...updatedMovie.topCast];
    newTopCast.splice(index, 1);
    setUpdatedMovie((prev) => ({
      ...prev,
      topCast: newTopCast,
    }));
  };

  const handleAddTag = () => {
    if (currentTag && !updatedMovie.tags.includes(currentTag)) {
      setUpdatedMovie((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setUpdatedMovie((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  // handle submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log("Updated Movie:", updatedMovie);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedMovie),
        }
      );
      await res.json();
      //   console.log("updated response", data);
      onClose();

      setTimeout(() => {
        router.refresh();
      }, 100);
    } catch (error) {
      console.log("error while updating!", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-blue-950 border-blue-800 text-white p-6 rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Update Movie Details</h2>
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </Button> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rest of your form content - SAME AS BEFORE */}
        {/* Basic Information */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white font-medium">
              Title *
            </Label>
            <Input
              id="title"
              name="title"
              value={updatedMovie.title}
              onChange={handleChange}
              required
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              placeholder="Enter movie title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="poster" className="text-white font-medium">
              Poster Image *
            </Label>
            <div className="flex items-center gap-4">
              <Input
                id="poster"
                type="file"
                accept="image/*"
                onChange={handlePosterChange}
                className="bg-slate-800 border-slate-600 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 px-2 hover:file:bg-blue-700 file:cursor-pointer cursor-pointer"
              />
              {posterPreview && (
                <Image
                  src={posterPreview}
                  alt="Poster Preview"
                  width={80}
                  height={120}
                  className="rounded-lg object-cover border border-slate-600"
                />
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-white font-medium">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            value={updatedMovie.description}
            onChange={handleChange}
            rows={3}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="Enter movie description"
          />
        </div>

        {/* Creators */}
        <div className="space-y-2">
          <Label className="text-white font-medium">Creators</Label>
          <div className="flex gap-2">
            <Input
              value={currentCreator}
              onChange={(e) => setCurrentCreator(e.target.value)}
              placeholder="Add creator"
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleAddCreator())
              }
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
            <Button
              type="button"
              onClick={handleAddCreator}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
            >
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {updatedMovie.creators.map((creator, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                onClick={() => handleRemoveCreator(creator)}
              >
                {creator} ×
              </Badge>
            ))}
          </div>
        </div>

        {/* Stars */}
        <div className="space-y-2">
          <Label className="text-white font-medium">Stars</Label>
          <div className="flex gap-2">
            <Input
              value={currentStar}
              onChange={(e) => setCurrentStar(e.target.value)}
              placeholder="Add star"
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleAddStar())
              }
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
            <Button
              type="button"
              onClick={handleAddStar}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
            >
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {updatedMovie.stars.map((star, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                onClick={() => handleRemoveStar(star)}
              >
                {star} ×
              </Badge>
            ))}
          </div>
        </div>

        {/* Genre */}
        <div className="space-y-2">
          <Label className="text-white font-medium">Genre</Label>
          <div className="flex gap-2">
            <Input
              value={currentGenre}
              onChange={(e) => setCurrentGenre(e.target.value)}
              placeholder="Add genre"
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleAddGenre())
              }
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
            <Button
              type="button"
              onClick={handleAddGenre}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
            >
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {updatedMovie.genre.map((genre, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                onClick={() => handleRemoveGenre(genre)}
              >
                {genre} ×
              </Badge>
            ))}
          </div>
        </div>

        {/* Numeric Fields */}
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="releaseYear" className="text-white font-medium">
              Release Year
            </Label>
            <Input
              id="releaseYear"
              name="releaseYear"
              type="number"
              value={updatedMovie.releaseYear}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="episodes" className="text-white font-medium">
              Episodes
            </Label>
            <Input
              id="episodes"
              name="episodes"
              type="number"
              value={updatedMovie.episodes}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating" className="text-white font-medium">
              Rating
            </Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              step="0.1"
              value={updatedMovie.rating}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ratingCount" className="text-white font-medium">
              Rating Count
            </Label>
            <Input
              id="ratingCount"
              name="ratingCount"
              type="number"
              value={updatedMovie.ratingCount}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-white font-medium">
              Language
            </Label>
            <Input
              id="language"
              name="language"
              value={updatedMovie.language}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              placeholder="English"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-white font-medium">
              Country
            </Label>
            <Input
              id="country"
              name="country"
              value={updatedMovie.country}
              onChange={handleChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              placeholder="USA"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="text-white font-medium">
              Duration
            </Label>
            <Input
              id="duration"
              name="duration"
              value={updatedMovie.duration}
              onChange={handleChange}
              placeholder="42m per ep"
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>
        </div>

        {/* YouTube URL */}
        <div className="space-y-2">
          <Label htmlFor="youtubeUrl" className="text-white font-medium">
            YouTube Embedded URL
          </Label>
          <Input
            id="youtubeUrl"
            name="youtubeUrl"
            type="url"
            value={updatedMovie.youtubeUrl}
            onChange={handleChange}
            placeholder="https://www.youtube.com/embed/..."
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
          />
        </div>

        {/* Top Cast Section */}
        <div className="space-y-4 border border-slate-600 p-4 rounded-lg bg-slate-800/50">
          <div className="flex justify-between items-center">
            <Label className="text-white font-medium text-lg">Top Cast</Label>
            <Button
              type="button"
              onClick={addTopCast}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
            >
              + Add Cast
            </Button>
          </div>

          <div className="space-y-4">
            {updatedMovie.topCast.map((cast, index) => (
              <div
                key={index}
                className="border border-slate-600 p-4 rounded-lg bg-slate-700/50 space-y-4"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white font-medium">Name</Label>
                    <Input
                      value={cast.name}
                      onChange={(e) =>
                        handleTopCastChange(index, "name", e.target.value)
                      }
                      placeholder="Actor name"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-medium">Role</Label>
                    <Input
                      value={cast.role}
                      onChange={(e) =>
                        handleTopCastChange(index, "role", e.target.value)
                      }
                      placeholder="Character role"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-medium">Episodes</Label>
                    <Input
                      type="number"
                      value={cast.episode}
                      onChange={(e) =>
                        handleTopCastChange(index, "episode", +e.target.value)
                      }
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-medium">Year</Label>
                    <Input
                      type="number"
                      value={cast.year}
                      onChange={(e) =>
                        handleTopCastChange(index, "year", +e.target.value)
                      }
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                  <div className="space-y-2">
                    <Label className="text-white font-medium">Cast Image</Label>
                    <div className="flex items-center gap-4">
                      {typeof cast.image === "string" && cast.image !== "" && (
                        <Image
                          src={cast.image}
                          alt="Cast"
                          width={60}
                          height={60}
                          className="rounded-lg object-cover border border-slate-600"
                        />
                      )}
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          e.target.files &&
                          handleTopCastImageChange(index, e.target.files[0])
                        }
                        className="bg-slate-800 border-slate-600 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 hover:file:bg-blue-700 file:cursor-pointer cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => removeTopCast(index)}
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                    >
                      Remove Cast
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label className="text-white font-medium">Tags</Label>
          <div className="flex gap-2">
            <Input
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              placeholder="Add tag"
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleAddTag())
              }
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
            <Button
              type="button"
              onClick={handleAddTag}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
            >
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {updatedMovie?.tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                onClick={() => handleRemoveTag(tag)}
              >
                {tag} ×
              </Badge>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-2 pt-4 border-t border-slate-600">
          <Button
            type="button"
            variant="default"
            onClick={handleCancel}
            className="border-slate-600 text-white hover:bg-slate-700 hover:text-white cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-medium px-8 cursor-pointer"
          >
            Update Movie
          </Button>
        </div>
      </form>
    </div>
  );
}
