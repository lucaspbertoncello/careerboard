-- CreateEnum
CREATE TYPE "public"."interview_status" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."interviews" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "company_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "applied_at" TIMESTAMP(3) NOT NULL,
    "salary" DOUBLE PRECISION,
    "status" "public"."interview_status" NOT NULL,
    "description" TEXT,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."interviews" ADD CONSTRAINT "interviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
