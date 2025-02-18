/*

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private UserModel: UserModelType) {}

  async isUserFoundByEmailOrLogin(loginOrEmail: string): Promise<boolean> {
    const queryToDb = loginOrEmail.includes('@')
      ? { email: loginOrEmail }
      : { login: loginOrEmail };

    const isUserFound: number = await this.UserModel.countDocuments({
      ...queryToDb,
    });

    return !!isUserFound;
  }

  async checkUserFoundOrNotFoundError(userId: UserId): Promise<void> {
    const isUserFound: number = await this.UserModel.countDocuments({
      _id: new ObjectId(userId),
      deletionStatus: DeletionStatus.NotDeleted,
    });

    if (!isUserFound) throw new NotFoundException('user not found');
  }

  /!*  async checkUserFoundOrUnauthorizedError(userId: UserId): Promise<void> {
    const isUserFound: number = await this.UserModel.countDocuments({
      _id: new ObjectId(userId),
      deletionStatus: DeletionStatus.NotDeleted,
    });

    if (!isUserFound) throw new UnauthorizedException('user not found');
  }*!/

  async findUserByLoginOrEmail(loginOrEmail: string): Promise<User | null> {
    return this.UserModel.findOne({
      $or: [{ login: loginOrEmail }, { email: loginOrEmail }],
      deletionStatus: DeletionStatus.NotDeleted,
    });
  }

  /!*
  async findUserByLoginOrEmailOrUnauthorizedException(
    loginOrEmail: string,
  ): Promise<User | null> {
    const user: User | null = await this.UserModel.findOne({
      $or: [{ login: loginOrEmail }, { email: loginOrEmail }],
      deletionStatus: DeletionStatus.NotDeleted,
    });

    if (!user) throw new UnauthorizedException();

    return user;
  }
  *!/

  async getUserByIdOrNotFoundError(userId: UserId): Promise<User> {
    const user = await this.UserModel.findOne({
      _id: new ObjectId(userId),
      deletionStatus: DeletionStatus.NotDeleted,
    });

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  async saveChange(user: User): Promise<void> {
    await user.save();
  }

  async createUser(user: User): Promise<UserId> {
    await user.save();
    return user._id.toString();
  }

  async findUserByEmailConfirmationCode(
    emailConfirmationCode: string,
  ): Promise<User | null> {
    return this.UserModel.findOne({
      'emailConfirmation.confirmationCode': emailConfirmationCode,
      deletionStatus: DeletionStatus.NotDeleted,
    });
  }

  async findUserByPasswordRecoveryCode(
    passwordRecoveryCode: string,
  ): Promise<User | null> {
    return this.UserModel.findOne({
      'recoveryPassword.recoveryCode': passwordRecoveryCode,
      deletionStatus: DeletionStatus.NotDeleted,
    });
  }
}
*/
