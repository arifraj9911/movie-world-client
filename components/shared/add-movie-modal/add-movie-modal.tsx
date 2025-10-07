/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface AddMovieModalProps {
  onMovieAdd: (movieData: {
    formData: any;
    posterFile: File | null;
    topCastFiles: File[];
  }) => void;
  children: React.ReactNode;
}

interface CastMemberForm {
  name: string;
  role: string;
  episode: number;
  year: number;
  image: File | null;
}

export function AddMovieModal({ onMovieAdd, children }: AddMovieModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    poster: null as File | null,
    description: "",
    creators: [] as string[],
    stars: [] as string[],
    genre: [] as string[],
    releaseYear: new Date().getFullYear(),
    episodes: 0,
    videos: 0,
    photos: 0,
    rating: 0,
    ratingCount: 0,
    language: "",
    country: "",
    duration: "",
    youtubeUrl: "",
    topCast: [] as CastMemberForm[],
    tags: [] as string[],
  });

  const [currentCreator, setCurrentCreator] = useState("");
  const [currentStar, setCurrentStar] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const [currentCast, setCurrentCast] = useState<CastMemberForm>({
    name: "",
    role: "",
    episode: 0,
    year: new Date().getFullYear(),
    image: null,
  });

  const handleAddCreator = () => {
    if (currentCreator && !formData.creators.includes(currentCreator)) {
      setFormData((prev) => ({
        ...prev,
        creators: [...prev.creators, currentCreator],
      }));
      setCurrentCreator("");
    }
  };

  const handleRemoveCreator = (creator: string) => {
    setFormData((prev) => ({
      ...prev,
      creators: prev.creators.filter((c) => c !== creator),
    }));
  };

  const handleAddStar = () => {
    if (currentStar && !formData.stars.includes(currentStar)) {
      setFormData((prev) => ({
        ...prev,
        stars: [...prev.stars, currentStar],
      }));
      setCurrentStar("");
    }
  };

  const handleRemoveStar = (star: string) => {
    setFormData((prev) => ({
      ...prev,
      stars: prev.stars.filter((s) => s !== star),
    }));
  };

  const handleAddGenre = () => {
    if (currentGenre && !formData.genre.includes(currentGenre)) {
      setFormData((prev) => ({
        ...prev,
        genre: [...prev.genre, currentGenre],
      }));
      setCurrentGenre("");
    }
  };

  const handleRemoveGenre = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      genre: prev.genre.filter((g) => g !== genre),
    }));
  };

  const handleAddTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleAddCast = () => {
    if (currentCast.name && currentCast.role) {
      setFormData((prev) => ({
        ...prev,
        topCast: [...prev.topCast, { ...currentCast }],
      }));
      setCurrentCast({
        name: "",
        role: "",
        episode: 0,
        year: new Date().getFullYear(),
        image: null,
      });
    }
  };

  const handleRemoveCast = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      topCast: prev.topCast.filter((_, i) => i !== index),
    }));
  };

  const handleCastImageChange = (index: number, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      topCast: prev.topCast.map((cast, i) =>
        i === index ? { ...cast, image: file } : cast
      ),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Extract topCast files
    const topCastFiles = formData.topCast
      .map((cast) => cast.image)
      .filter((file): file is File => file !== null);

    // Prepare data to send to parent
    const movieData = {
      formData: {
        title: formData.title,
        description: formData.description,
        creators: formData.creators,
        stars: formData.stars,
        genre: formData.genre,
        releaseYear: formData.releaseYear,
        episodes: formData.episodes,
        videos: formData.videos,
        photos: formData.photos,
        rating: formData.rating,
        ratingCount: formData.ratingCount,
        language: formData.language,
        country: formData.country,
        duration: formData.duration,
        youtubeUrl: formData.youtubeUrl,
        tags: formData.tags,
        topCast: formData.topCast.map((cast) => ({
          name: cast.name,
          role: cast.role,
          episode: cast.episode,
          year: cast.year,
        })),
      },
      posterFile: formData.poster,
      topCastFiles: topCastFiles,
    };

    // console.log("Complete movieData being passed to parent:", movieData);

    onMovieAdd(movieData);
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      poster: null,
      description: "",
      creators: [],
      stars: [],
      genre: [],
      releaseYear: new Date().getFullYear(),
      episodes: 0,
      videos: 0,
      photos: 0,
      rating: 0,
      ratingCount: 0,
      language: "",
      country: "",
      duration: "",
      youtubeUrl: "",
      topCast: [],
      tags: [],
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-blue-950 border-blue-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            Add New Movie
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white font-medium">
                Title *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                placeholder="Enter movie title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="poster" className="text-white font-medium">
                Poster Image *
              </Label>
              <Input
                id="poster"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    poster: e.target.files?.[0] || null,
                  }))
                }
                required
                className="bg-slate-800 border-slate-600 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 px-2   hover:file:bg-blue-700 file:cursor-pointer cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
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
              {formData.creators.map((creator, index) => (
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
              {formData.stars.map((star, index) => (
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
              {formData.genre.map((genre, index) => (
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
                type="number"
                value={formData.releaseYear}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    releaseYear: parseInt(e.target.value),
                  }))
                }
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="episodes" className="text-white font-medium">
                Episodes
              </Label>
              <Input
                id="episodes"
                type="number"
                value={formData.episodes}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    episodes: parseInt(e.target.value),
                  }))
                }
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating" className="text-white font-medium">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                step="0.1"
                value={formData.rating}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rating: parseFloat(e.target.value),
                  }))
                }
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ratingCount" className="text-white font-medium">
                Rating Count
              </Label>
              <Input
                id="ratingCount"
                type="number"
                value={formData.ratingCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    ratingCount: parseInt(e.target.value),
                  }))
                }
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
                value={formData.language}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, language: e.target.value }))
                }
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
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
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
                value={formData.duration}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, duration: e.target.value }))
                }
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
              type="url"
              value={formData.youtubeUrl}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, youtubeUrl: e.target.value }))
              }
              placeholder="https://www.youtube.com/embed/..."
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          {/* Top Cast */}
          <div className="space-y-4 border border-slate-600 p-4 rounded-lg bg-slate-800/50">
            <Label className="text-white font-medium text-lg">Top Cast</Label>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="castName" className="text-white font-medium">
                  Name
                </Label>
                <Input
                  id="castName"
                  value={currentCast.name}
                  onChange={(e) =>
                    setCurrentCast((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                  placeholder="Actor name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="castRole" className="text-white font-medium">
                  Role
                </Label>
                <Input
                  id="castRole"
                  value={currentCast.role}
                  onChange={(e) =>
                    setCurrentCast((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }))
                  }
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                  placeholder="Character role"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="castEpisodes"
                  className="text-white font-medium"
                >
                  Episodes
                </Label>
                <Input
                  id="castEpisodes"
                  type="number"
                  value={currentCast.episode}
                  onChange={(e) =>
                    setCurrentCast((prev) => ({
                      ...prev,
                      episode: parseInt(e.target.value),
                    }))
                  }
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="castYear" className="text-white font-medium">
                  Year
                </Label>
                <Input
                  id="castYear"
                  type="number"
                  value={currentCast.year}
                  onChange={(e) =>
                    setCurrentCast((prev) => ({
                      ...prev,
                      year: parseInt(e.target.value),
                    }))
                  }
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2 col-span-2">
                <Label htmlFor="castImage" className="text-white font-medium">
                  Cast Image
                </Label>
                <Input
                  id="castImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setCurrentCast((prev) => ({
                      ...prev,
                      image: e.target.files?.[0] || null,
                    }))
                  }
                  className="bg-slate-800 border-slate-600 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 hover:file:bg-blue-700 file:cursor-pointer cursor-pointer px-2 "
                />
              </div>
            </div>

            <div className=" flex justify-end">
              <Button
                type="button"
                onClick={handleAddCast}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium cursor-pointer"
              >
                Add Cast Member
              </Button>
            </div>

            <div className="space-y-2">
              {formData.topCast.map((cast, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 border border-slate-600 rounded-lg bg-slate-700/50"
                >
                  <div className="text-white">
                    <span className="font-medium">{cast.name}</span> as{" "}
                    <span className="text-blue-300">{cast.role}</span>
                    <span className="text-sm text-slate-300 ml-2">
                      ({cast.episode} eps, {cast.year})
                    </span>
                    {cast.image && (
                      <span className="text-sm text-green-400 ml-2">
                        ✓ Image selected
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleCastImageChange(
                          index,
                          e.target.files?.[0] || null
                        )
                      }
                      className="w-40 bg-slate-800 border-slate-600 text-white file:bg-green-600 file:text-white file:border-0 file:rounded-md file:px-2 file:py-1 hover:file:bg-green-700 text-sm "
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveCast(index)}
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                    >
                      Remove
                    </Button>
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
              {formData.tags.map((tag, index) => (
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
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-slate-600 text-black hover:bg-slate-700 hover:text-white cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-8 cursor-pointer"
            >
              Add Movie
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
