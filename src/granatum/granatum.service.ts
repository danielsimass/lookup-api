import { Injectable } from '@nestjs/common';
import { granatumBaseUrl } from 'src/common/constants/config.constants';
import { CreateReleaseDto } from './dto/createGranatum.dto';
import axios from 'axios';

@Injectable()
export class GranatumService {
  instance = axios.create({
    baseURL: granatumBaseUrl,
    timeout: 5000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  async createRelease(data: CreateReleaseDto, granatumAcessToken: string) {
    try {
      const jsonData = JSON.parse(
        JSON.stringify({
          descricao: data.description,
          conta_id: data.accountId,
          categoria_id: data.categoryId,
          valor: data.value,
          data_vencimento: data.dueDate,
        }),
      );

      const response = await this.instance.post(
        `/lancamentos?access_token=${granatumAcessToken}`,
        jsonData,
      );

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getAllReleases(accountId: string | number, granatumAcessToken: string) {
    try {
      const response = await this.instance.get(
        `/lancamentos?access_token=${granatumAcessToken}&conta_id=${accountId}`,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getReleaseById(id: number | string, granatumAcessToken: string) {
    try {
      const response = await this.instance.get(
        `/lancamentos/${id}?access_token=${granatumAcessToken}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async deleteReleaseById(id: number | string, granatumAcessToken: string) {
    try {
      const response = await this.instance.delete(
        `/lancamentos/${id}?access_token=${granatumAcessToken}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getAllCategories(granatumAcessToken: string) {
    try {
      console.log(granatumAcessToken);
      const response = await this.instance.get(
        `/categorias?access_token=${granatumAcessToken}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllAccounts(granatumAcessToken: string) {
    try {
      console.log(granatumAcessToken);
      const response = await this.instance.get(
        `/contas?access_token=${granatumAcessToken}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteTests() {
    try {
      const lancamentos = [];
      const response = await this.instance.get(
        `/lancamentos?access_token=b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113&conta_id=103497`,
      );

      for (const res of response.data) {
        if (res.descricao.includes('TEST')) {
          lancamentos.push(res.id);
        }
      }

      for (const lancamento of lancamentos) {
        await this.instance.delete(
          `/lancamentos/${lancamento}?access_token=b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113`,
        );
      }
      return true;
    } catch (error) {
      return error;
    }
  }
}
