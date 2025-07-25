import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updataUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load profile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updataUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
