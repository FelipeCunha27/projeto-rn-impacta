import { User } from './../models/users';
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserRepository {
  private static readonly KEY = "APP_USER@user_document";

  private async persist(list: User[]) {
    await AsyncStorage.setItem(UserRepository.KEY, JSON.stringify(list));
  }

  private equals(p1: User, p2: User) {
    return p1.login === p2.login;
  }

  public async getUsers() {
    const json = await AsyncStorage.getItem(UserRepository.KEY);
    if (json) return JSON.parse(json) as User[];
    return [];
  }

  public async getUser(user: string, password: string) {
    const list = await this.getUsers();

      const finded = list.find(item => item.login === user && item.password === password);

      if (finded) {
        return true
      } else {
        return false
      }
  }

  public async save(user: User) {
    const list = await this.getUsers();

    const finded = list.find((p) => this.equals(p, user));
    if (finded) {
      finded.name = user.name;
      finded.password = user.password;
    } else {
      list.push(user);
    }

    this.persist(list);
  }

  //   public async remove(place: Place) {
  //     let list = await this.getPlaces();
  //     list = list.filter((p) => !this.equals(p, place));

  //     this.persist(list);
  //   }
}

export const userRepo = new UserRepository();
