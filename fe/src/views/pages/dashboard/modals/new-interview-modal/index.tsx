import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/views/components/dialog";
import { Input } from "@/views/components/input";
import { Button } from "@/views/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/views/components/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/views/components/popover";
import { Calendar } from "@/views/components/calendar";
import { CalendarIcon } from "lucide-react";
import { useNewInterviewModalController } from "./use-new-interview-modal-controller";
import { InputCurrency } from "@/views/components/input-currency";
import { useNewInterviewModalForm } from "./use-new-interview-modal-form";
import { Controller } from "react-hook-form";
import { formatDate } from "@/app/utils/formatDate";
import { Textarea } from "@/views/components/textarea";

export function NewInterviewModal() {
  const { isNewInterviewModalOpen, closeNewInterviewModal } =
    useNewInterviewModalController();

  const { handleSubmit, register, errors, control } =
    useNewInterviewModalForm();

  return (
    <Dialog
      onOpenChange={closeNewInterviewModal}
      open={isNewInterviewModalOpen}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create interview</DialogTitle>

          <DialogDescription>
            Create a new interview record with company details, position and
            status
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium">
              Company Name *
            </label>

            <Input
              id="companyName"
              {...register("companyName")}
              placeholder="e.g. Google, Microsoft, Apple"
              error={errors.companyName?.message}
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Role *
            </label>

            <Input
              id="role"
              placeholder="e.g. Frontend Developer, Product Manager"
              {...register("role")}
              error={errors.role?.message}
            />
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <label htmlFor="salary" className="text-sm font-medium">
              Salary
            </label>

            <Controller
              control={control}
              name="salary"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  onChange={onChange}
                  value={value}
                  error={errors.salary?.message}
                />
              )}
            />
          </div>

          {/* Status */}
          {/* refactor shitty code */}
          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium">
              Status *
            </label>

            <Controller
              control={control}
              name="status"
              render={({ field: { value, onChange } }) => (
                <div>
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="APPROVED">Approved</SelectItem>
                      <SelectItem value="REJECTED">Rejected</SelectItem>
                    </SelectContent>
                  </Select>

                  {errors.status?.message && (
                    <span className="text-xs text-red-400">
                      {errors.status.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          {/* Applied Date */}
          {/* refactor shitty code */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Applied Date *</label>

            <Controller
              control={control}
              name="appliedAt"
              defaultValue={new Date()}
              render={({ field: { value, onChange } }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {value ? formatDate(new Date(value)) : "Pick a date"}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      selected={value ? new Date(value) : undefined}
                      onSelect={onChange}
                      mode="single"
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description (Optional)
            </label>

            <Textarea
              {...register("description")}
              error={errors.description?.message}
            />
          </div>

          {/* Actions */}
          <div className="space-y-2 pt-4">
            <Button type="submit">Create Interview</Button>

            <Button
              type="button"
              variant="outline"
              onClick={closeNewInterviewModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
